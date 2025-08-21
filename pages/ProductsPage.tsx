import React, { useState, useMemo, useEffect } from 'react';
import { useAppContext } from '../App';
import { Product, Unit } from '../types';
import { PlusCircleIcon, SearchIcon, EditIcon, TrashIcon, BarcodeIcon, XIcon, PrinterIcon } from '../components/icons';
import { requestScan, listenForScanResult } from '../utils/firebase-scanner';
import ConfirmDialog from '../components/ConfirmDialog';

declare var JsBarcode: any;

const ProductModal = ({ product, onClose, onSave, scannedBarcode }: { product: Product | null, onClose: () => void, onSave: (product: Product, isNew: boolean) => Promise<void>, scannedBarcode: string }) => {
    const { units, saveUnits, products, suppliers } = useAppContext() as any;
    const [editedProduct, setEditedProduct] = useState<Omit<Product, 'price' | 'purchasePrice' | 'quantity'>>(
        product || {
            id: '', name: '', unit: units[0] || {id: 0, name: ''}, 
            supplier: '', productionDate: '', expiryDate: '', barcode: ''
        }
    );
    const [price, setPrice] = useState(product?.price.toString() || '');
    const [purchasePrice, setPurchasePrice] = useState(product?.purchasePrice.toString() || '');
    const [quantity, setQuantity] = useState(product?.quantity.toString() || '');
    const [barcodeError, setBarcodeError] = useState('');
    const supplierMatches = useMemo(() => {
        const q = (editedProduct.supplier || '').toLowerCase().trim();
        if (!q) return suppliers || [];
        return (suppliers || []).filter((s: any) => (s.name || '').toLowerCase().includes(q) || (s.phone || '').includes(editedProduct.supplier));
    }, [editedProduct.supplier, suppliers]);
    const [supplierDropdownOpen, setSupplierDropdownOpen] = useState(false);
    const [supplierChosen, setSupplierChosen] = useState(false);

    const [customUnit, setCustomUnit] = useState('');
    const isNew = !product;

    // التحقق من تكرار الباركود
    const checkBarcodeExists = (barcode: string) => {
        if (!barcode.trim()) {
            setBarcodeError('');
            return false;
        }
        
        const exists = products.some(p => p.barcode === barcode && (isNew || p.id !== product?.id));
        if (exists) {
            const existingProduct = products.find(p => p.barcode === barcode && (isNew || p.id !== product?.id));
            setBarcodeError(`هذا الباركود موجود بالفعل للمنتج: ${existingProduct?.name}`);
            return true;
        }
        
        setBarcodeError('');
        return false;
    };

    // Update barcode when scannedBarcode changes
    useEffect(() => {
        if (scannedBarcode) {
            setEditedProduct(prev => ({ ...prev, barcode: scannedBarcode }));
            checkBarcodeExists(scannedBarcode);
        }
    }, [scannedBarcode]);

    useEffect(() => {
        const handleScan = (barcode: string) => {
            setEditedProduct(prev => ({ ...prev, barcode: barcode }));
            checkBarcodeExists(barcode);
        };

        const unsubscribe = listenForScanResult(handleScan);
        return () => {
            if (unsubscribe) {
                unsubscribe();
            }
        };
    }, []);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        if (name === 'unitId') {
            const selectedUnit = units.find(u => u.id === parseInt(value));
            if (selectedUnit) {
                setEditedProduct({ ...editedProduct, unit: selectedUnit });
            }
        } else if (name === 'supplier') {
            setEditedProduct({ ...editedProduct, supplier: value });
            setSupplierChosen(false);
            setSupplierDropdownOpen(true);
        } else if (name === 'barcode') {
            setEditedProduct({ ...editedProduct, [name]: value });
            checkBarcodeExists(value);
        } else {
            setEditedProduct({ ...editedProduct, [name]: value });
        }
    };
    
    const handleSaveCustomUnit = async () => {
        if(customUnit.trim()){
            const newUnit: Unit = { id: Date.now(), name: customUnit.trim() };
            const updatedUnits = [newUnit, ...units];
            await saveUnits(updatedUnits);
            setEditedProduct({ ...editedProduct, unit: newUnit});
            setCustomUnit('');
        }
    };

    const handleSave = async () => {
        // التحقق من تكرار الباركود قبل الحفظ
        if (barcodeError) {
            return;
        }

        let finalProduct: Product = {
            ...editedProduct,
            price: parseFloat(price) || 0,
            purchasePrice: parseFloat(purchasePrice) || 0,
            quantity: parseInt(quantity) || 0,
            id: editedProduct.id || `p${Date.now()}`,
            barcode: editedProduct.barcode || `${Date.now()}`
        };
        
        await onSave(finalProduct, isNew);
        onClose();
    };
    
    const handleGenerateBarcode = () => {
        const randomBarcode = `${Date.now()}`;
        setEditedProduct({ ...editedProduct, barcode: randomBarcode });
        setBarcodeError('');
    };

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex justify-center items-center z-50">
            <div className="bg-white rounded-lg shadow-xl p-8 w-full max-w-4xl transform transition-all">
                <div className="flex justify-between items-center mb-6">
                    <h2 className="text-2xl font-bold">{isNew ? 'إضافة منتج جديد' : 'تعديل المنتج'}</h2>
                    <button onClick={onClose}><XIcon className="h-6 w-6 text-gray-500 hover:text-gray-800" /></button>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4">
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">اسم المنتج</label>
                        <input type="text" id="name" name="name" value={editedProduct.name} onChange={handleChange} placeholder="اسم المنتج" className="p-2 border rounded w-full" />
                    </div>
                     <div>
                        <label htmlFor="purchasePrice" className="block text-sm font-medium text-gray-700 mb-1">سعر الشراء</label>
                        <input type="number" step="0.01" id="purchasePrice" name="purchasePrice" value={purchasePrice} onChange={e => setPurchasePrice(e.target.value)} placeholder="سعر الشراء" className="p-2 border rounded w-full" />
                    </div>
                    <div>
                        <label htmlFor="price" className="block text-sm font-medium text-gray-700 mb-1">سعر البيع</label>
                        <input type="number" step="0.01" id="price" name="price" value={price} onChange={e => setPrice(e.target.value)} placeholder="سعر البيع" className="p-2 border rounded w-full" />
                    </div>
                    <div>
                        <label htmlFor="quantity" className="block text-sm font-medium text-gray-700 mb-1">الكمية</label>
                        <input type="number" id="quantity" name="quantity" value={quantity} onChange={e => setQuantity(e.target.value)} placeholder="الكمية" className="p-2 border rounded w-full" />
                    </div>
                    <div>
                        <label htmlFor="unitId" className="block text-sm font-medium text-gray-700 mb-1">الوحدة</label>
                        <select id="unitId" name="unitId" value={editedProduct.unit?.id || ''} onChange={handleChange} className="p-2 border rounded w-full">
                            {units.map(u => <option key={u.id} value={u.id}>{u.name}</option>)}
                        </select>
                        <div className="flex mt-2">
                           <input type="text" value={customUnit} onChange={e => setCustomUnit(e.target.value)} placeholder="أو أضف وحدة جديدة" className="p-2 border rounded-s-md flex-grow" />
                           <button onClick={handleSaveCustomUnit} className="bg-blue-500 text-white p-2 rounded-e-md">حفظ</button>
                        </div>
                    </div>
                    <div>
                        <label htmlFor="supplier" className="block text-sm font-medium text-gray-700 mb-1">المورد</label>
                        <div className="relative">
                            <input
                                type="text"
                                id="supplier"
                                name="supplier"
                                value={editedProduct.supplier}
                                onChange={handleChange}
                                onFocus={() => setSupplierDropdownOpen(true)}
                                placeholder="اسم المورد أو اكتب للبحث"
                                className={`p-2 border rounded w-full ${supplierChosen ? 'bg-blue-50' : ''}`}
                            />
                            {supplierDropdownOpen && editedProduct.supplier && supplierMatches && supplierMatches.length > 0 && (
                                <div className="absolute z-20 mt-1 w-full bg-white border rounded shadow max-h-40 overflow-auto">
                                    {supplierMatches.slice(0, 10).map((s: any) => (
                                        <div
                                            key={s.id}
                                            onClick={() => { setEditedProduct(prev => ({ ...prev, supplier: s.name })); setSupplierDropdownOpen(false); setSupplierChosen(true); }}
                                            className="px-3 py-2 hover:bg-blue-50 cursor-pointer flex items-center justify-between"
                                        >
                                            <span>{s.name}</span>
                                            <span className="text-xs text-gray-500" style={{direction:'ltr'}}>{s.phone}</span>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>
                     <div className="md:col-span-2">
                        <label htmlFor="barcode" className="block text-sm font-medium text-gray-700 mb-1">الباركود</label>
                        <div className="relative">
                           <input 
                               type="text" 
                               id="barcode" 
                               name="barcode" 
                               value={editedProduct.barcode} 
                               onChange={handleChange} 
                               placeholder="يولد تلقائياً اذا ترك فارغاً" 
                               className={`p-2 border rounded w-full pe-20 ${barcodeError ? 'border-red-500 bg-red-50' : ''}`}
                           />
                           <button onClick={handleGenerateBarcode} className="absolute left-12 top-1/2 -translate-y-1/2 text-gray-500" title="توليد باركود"><EditIcon className="h-5 w-5"/></button>
                           <button onClick={requestScan} className="absolute left-2 top-1/2 -translate-y-1/2 text-gray-500 hover:text-blue-600" title="مسح باركود"><BarcodeIcon className="h-5 w-5"/></button>
                        </div>
                        
                        {/* رسالة الخطأ */}
                        {barcodeError && (
                            <p className="mt-2 text-sm text-red-600 flex items-center">
                                <svg className="h-4 w-4 text-red-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                                </svg>
                                {barcodeError}
                            </p>
                        )}
                    </div>
                    <div>
                        <label htmlFor="productionDate" className="block text-sm font-medium text-gray-700 mb-1">تاريخ الإنتاج</label>
                        <input type="date" id="productionDate" name="productionDate" value={editedProduct.productionDate} onChange={handleChange} className="p-2 border rounded w-full" />
                    </div>
                    <div>
                        <label htmlFor="expiryDate" className="block text-sm font-medium text-gray-700 mb-1">تاريخ الإنتهاء</label>
                        <input type="date" id="expiryDate" name="expiryDate" value={editedProduct.expiryDate} onChange={handleChange} className="p-2 border rounded w-full" />
                    </div>
                </div>
                <div className="mt-6 flex justify-end space-x-3 space-x-reverse">
                    <button onClick={onClose} className="px-4 py-2 bg-gray-200 rounded">إلغاء</button>
                    <button 
                        onClick={handleSave} 
                        disabled={!!barcodeError}
                        className={`px-4 py-2 rounded ${barcodeError ? 'bg-gray-300 text-gray-500 cursor-not-allowed' : 'bg-blue-600 text-white hover:bg-blue-700'}`}
                    >
                        حفظ
                    </button>
                </div>
            </div>
        </div>
    );
};

const ProductsPage = () => {
    const { products, saveProducts, addNotification } = useAppContext();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [editingProduct, setEditingProduct] = useState<Product | null>(null);
    const [searchTerm, setSearchTerm] = useState('');
    const [scannedBarcode, setScannedBarcode] = useState('');
    const [filter, setFilter] = useState('all');
    const [selectedProducts, setSelectedProducts] = useState<Set<string>>(new Set());
    
    // Confirmation dialogs state
    const [confirmDialog, setConfirmDialog] = useState<{
        isOpen: boolean;
        title: string;
        message: string;
        onConfirm: () => void;
        type?: 'danger' | 'warning' | 'info';
    }>({
        isOpen: false,
        title: '',
        message: '',
        onConfirm: () => {},
        type: 'warning'
    });

    // USB Scanner support - listen for keyboard input
    useEffect(() => {
        let barcodeBuffer = '';
        let lastKeyTime = Date.now();

        const handleKeyPress = (e: KeyboardEvent) => {
            const currentTime = Date.now();
            
            // If more than 100ms between keystrokes, start new barcode
            if (currentTime - lastKeyTime > 100) {
                barcodeBuffer = '';
            }
            lastKeyTime = currentTime;

            // Handle Enter key (end of barcode scan)
            if (e.key === 'Enter' && barcodeBuffer.length > 0) {
                e.preventDefault();
                
                if (isModalOpen) {
                    // If modal is open, set barcode in the modal
                    setScannedBarcode(barcodeBuffer);
                } else {
                    // If modal is closed, search for the product
                    setSearchTerm(barcodeBuffer);
                }
                
                barcodeBuffer = '';
                return;
            }

            // Build barcode buffer (only if not typing in an input field)
            if (e.target instanceof HTMLElement && 
                e.target.tagName !== 'INPUT' && 
                e.target.tagName !== 'TEXTAREA' && 
                e.key.length === 1) {
                barcodeBuffer += e.key;
            }
        };

        document.addEventListener('keypress', handleKeyPress);
        return () => document.removeEventListener('keypress', handleKeyPress);
    }, [isModalOpen]);

    useEffect(() => {
        const handleScan = (barcode: string) => {
            if (isModalOpen) {
                setScannedBarcode(barcode);
            } else {
                setSearchTerm(barcode);
            }
        };

        const unsubscribe = listenForScanResult(handleScan);
        return () => {
            if (unsubscribe) {
                unsubscribe();
            }
        };
    }, [isModalOpen]);

    const showConfirmDialog = (title: string, message: string, onConfirm: () => void, type: 'danger' | 'warning' | 'info' = 'warning') => {
        setConfirmDialog({
            isOpen: true,
            title,
            message,
            onConfirm,
            type
        });
    };

    const hideConfirmDialog = () => {
        setConfirmDialog(prev => ({ ...prev, isOpen: false }));
    };

    const handleSaveProduct = async (product: Product, isNew: boolean) => {
        // لا نحتاج للتحقق هنا لأن Modal يتعامل مع ذلك
        await saveProductFinal(product, isNew);
    };

    const saveProductFinal = async (product: Product, isNew: boolean) => {
        if (isNew) {
            await saveProducts([product, ...products]);
            addNotification('تمت إضافة المنتج بنجاح');
        } else {
            await saveProducts(products.map(p => (p.id === product.id ? product : p)));
            addNotification('تم تحديث المنتج بنجاح');
        }
    };

    const handleDeleteProduct = async (productId: string) => {
        const product = products.find(p => p.id === productId);
        if (!product) return;

        showConfirmDialog(
            'حذف المنتج',
            `هل أنت متأكد من حذف المنتج "${product.name}"؟ لا يمكن التراجع عن هذا الإجراء.`,
            async () => {
                await saveProducts(products.filter(p => p.id !== productId));
                addNotification('تم حذف المنتج', 'success');
                hideConfirmDialog();
            },
            'danger'
        );
    };

    const handleDeleteSelected = async () => {
        if (selectedProducts.size === 0) {
            addNotification('لم يتم تحديد أي منتجات للحذف', 'error');
            return;
        }
        
        showConfirmDialog(
            'حذف المنتجات المحددة',
            `هل أنت متأكد من حذف ${selectedProducts.size} منتج؟ لا يمكن التراجع عن هذا الإجراء.`,
            async () => {
                await saveProducts(products.filter(p => !selectedProducts.has(p.id)));
                addNotification(`تم حذف ${selectedProducts.size} منتج`, 'success');
                setSelectedProducts(new Set());
                hideConfirmDialog();
            },
            'danger'
        );
    };

    const handlePrintBarcode = (product: Product) => {
        const content = `
            <div class="barcode-label">
                <svg class="barcode-svg" jsbarcode-value="${product.barcode}" jsbarcode-format="CODE128" jsbarcode-width="2" jsbarcode-height="60" jsbarcode-displayvalue="false" jsbarcode-fontsize="12"></svg>
                <div class="barcode-text">${product.barcode} - ${product.name}</div>
            </div>
        `;

        const printStyles = `
            @page {
                size: 58mm 35mm portrait;
                margin: 0;
            }
            @media print {
                html, body {
                    width: 58mm !important;
                    height: 35mm !important;
                    margin: 0 !important;
                    padding: 0 !important;
                    overflow: hidden !important;
                    font-family: 'Cairo', Arial, sans-serif;
                }
                * {
                    box-sizing: border-box;
                }
            }
            .barcode-label {
                width: 58mm;
                height: 35mm;
                padding: 1mm;
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                text-align: center;
                background: white;
            }
            .barcode-svg {
                width: 56mm !important;
                height: 28mm !important;
                margin: 0 !important;
                padding: 0 !important;
                display: block !important;
            }
            .barcode-text {
                font-size: 12px;
                font-weight: bold;
                line-height: 1;
                margin: -20px 0 0 0;
                padding: 0;
                text-align: center;
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
                max-width: 56mm;
            }
        `;

        const printWindow = window.open('', '_blank');
        if (printWindow) {
            printWindow.document.write(`
                <html>
                    <head>
                        <meta charset="UTF-8">
                        <title>ملصق باركود - ${product.name}</title>
                        <link href="https://fonts.googleapis.com/css2?family=Cairo:wght@400;700&display=swap" rel="stylesheet">
                        <style>${printStyles}</style>
                    </head>
                    <body>
                        ${content}
                        <script src="https://cdn.jsdelivr.net/npm/jsbarcode@3.11.5/dist/JsBarcode.all.min.js"></script>
                        <script>
                            try {
                                JsBarcode(".barcode-svg").init();
                                setTimeout(() => {
                                    window.print();
                                    window.close();
                                }, 500);
                            } catch (e) {
                                console.error('JsBarcode Error:', e);
                                document.body.innerHTML = '<div style="padding:10px;text-align:center;">خطأ في توليد الباركود</div>';
                                setTimeout(() => window.close(), 2000);
                            }
                        </script>
                    </body>
                </html>
            `);
            printWindow.document.close();
        }
    };

    const handlePrintSelectedBarcodes = () => {
        if (selectedProducts.size === 0) {
            addNotification('لم يتم تحديد أي منتجات للطباعة', 'error');
            return;
        }

        const selectedProductsList = products.filter(p => selectedProducts.has(p.id));
        const content = selectedProductsList.map(product => `
            <div class="barcode-item">
                <svg class="barcode-svg" jsbarcode-value="${product.barcode}" jsbarcode-format="CODE128" jsbarcode-width="2" jsbarcode-height="60" jsbarcode-displayvalue="false" jsbarcode-fontsize="12"></svg>
                <div class="barcode-text">${product.barcode} - ${product.name}</div>
            </div>
        `).join('');

        const printStyles = `
            @page {
                size: 58mm auto;
                margin: 0;
            }
            @media print {
                html, body {
                    width: 58mm !important;
                    margin: 0 !important;
                    padding: 0 !important;
                    font-family: 'Cairo', Arial, sans-serif;
                }
                * {
                    box-sizing: border-box;
                }
            }
            body {
                font-family: 'Cairo', Arial, sans-serif;
                display: flex;
                flex-direction: column;
                gap: 0mm;
            }
            .barcode-item {
                width: 58mm;
                height: 35mm;
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                text-align: center;
                page-break-inside: avoid;
                padding: 1mm;
                background: white;
                border-bottom: 1px dashed #ccc;
            }
            .barcode-item:last-child {
                border-bottom: none;
            }
            .barcode-svg {
                width: 56mm !important;
                height: 28mm !important;
                margin: 0 !important;
                padding: 0 !important;
                display: block !important;
            }
            .barcode-text {
                font-size: 12px;
                font-weight: bold;
                line-height: 1;
                margin: -20px 0 0 0;
                padding: 0;
                text-align: center;
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
                max-width: 56mm;
            }
        `;

        const printWindow = window.open('', '_blank');
        if (printWindow) {
            printWindow.document.write(`
                <html>
                    <head>
                        <meta charset="UTF-8">
                        <title>طباعة باركودات متعددة</title>
                        <link href="https://fonts.googleapis.com/css2?family=Cairo:wght@400;700&display=swap" rel="stylesheet">
                        <style>${printStyles}</style>
                    </head>
                    <body>
                        ${content}
                        <script src="https://cdn.jsdelivr.net/npm/jsbarcode@3.11.5/dist/JsBarcode.all.min.js"></script>
                        <script>
                            try {
                                JsBarcode(".barcode-svg").init();
                                setTimeout(() => {
                                    window.print();
                                    window.close();
                                }, 500);
                            } catch (e) {
                                console.error('JsBarcode Error:', e);
                                window.close();
                            }
                        </script>
                    </body>
                </html>
            `);
            printWindow.document.close();
        }
    };

    const handleSelectProduct = (productId: string) => {
        const newSelection = new Set(selectedProducts);
        if (newSelection.has(productId)) {
            newSelection.delete(productId);
        } else {
            newSelection.add(productId);
        }
        setSelectedProducts(newSelection);
    };

    const handleSelectAll = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.checked) {
            setSelectedProducts(new Set(filteredProducts.map(p => p.id)));
        } else {
            setSelectedProducts(new Set());
        }
    };

    const filteredProducts = useMemo(() => {
        return products
            .filter(p => {
                if (filter === 'lowStock') return p.quantity < 10;
                if (filter === 'expiringSoon' && p.expiryDate) {
                    const today = new Date();
                    const expiry = new Date(p.expiryDate);
                    const diffDays = Math.ceil((expiry.getTime() - today.getTime()) / (1000 * 3600 * 24));
                    return diffDays <= 30 && diffDays >= 0;
                }
                return true;
            })
            .filter(p =>
                p.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                p.barcode.includes(searchTerm) ||
                p.supplier.toLowerCase().includes(searchTerm.toLowerCase())
            );
    }, [products, searchTerm, filter]);

    return (
        <div>
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-3xl font-bold">إدارة المنتجات</h1>
                <button onClick={() => { setEditingProduct(null); setIsModalOpen(true); }} className="flex items-center bg-blue-600 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-700 transition">
                    <PlusCircleIcon className="h-5 w-5 me-2" />
                    إضافة منتج جديد
                </button>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md mb-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="relative md:col-span-2">
                        <input 
                            type="text" 
                            placeholder="ابحث بالاسم، الباركود، المورد..." 
                            className="w-full p-3 ps-10 border rounded-lg"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                        <SearchIcon className="absolute top-1/2 -translate-y-1/2 right-3 h-5 w-5 text-gray-400" />
                        <button onClick={requestScan} className="absolute top-1/2 -translate-y-1/2 left-3 text-gray-500 hover:text-blue-600">
                            <BarcodeIcon className="h-5 w-5"/>
                        </button>
                    </div>
                    <select value={filter} onChange={(e) => setFilter(e.target.value)} className="w-full p-3 border rounded-lg">
                        <option value="all">كل المنتجات</option>
                        <option value="lowStock">مخزون منخفض</option>
                        <option value="expiringSoon">قرب انتهاء الصلاحية</option>
                    </select>
                </div>
            </div>

            {/* عداد المنتجات والإجراءات الجماعية */}
            <div className="flex justify-between items-center mb-4">
                <div className="flex items-center space-x-4 space-x-reverse">
                    <span className="text-sm text-gray-600">
                        عدد المنتجات: <span className="font-bold text-blue-600">{filteredProducts.length}</span>
                    </span>
                    {selectedProducts.size > 0 && (
                        <span className="text-sm text-green-600">
                            محدد: <span className="font-bold">{selectedProducts.size}</span>
                        </span>
                    )}
                </div>
                
                <div className="flex items-center space-x-2 space-x-reverse">
                    {selectedProducts.size > 0 && (
                        <>
                            <button 
                                onClick={handlePrintSelectedBarcodes}
                                className="flex items-center bg-green-500 text-white px-3 py-2 rounded-lg shadow hover:bg-green-600 transition text-sm"
                            >
                                <PrinterIcon className="h-4 w-4 me-1" />
                                طباعة المحدد ({selectedProducts.size})
                            </button>
                            <button 
                                onClick={handleDeleteSelected}
                                className="flex items-center bg-red-500 text-white px-3 py-2 rounded-lg shadow hover:bg-red-600 transition text-sm"
                            >
                                <TrashIcon className="h-4 w-4 me-1" />
                                حذف المحدد ({selectedProducts.size})
                            </button>
                        </>
                    )}
                </div>
            </div>

            <div className="bg-white rounded-lg shadow-md overflow-x-auto">
                <table className="w-full text-center">
                    <thead className="bg-gray-50">
                        <tr>
                            <th className="p-4">
                                <input 
                                    type="checkbox" 
                                    onChange={handleSelectAll} 
                                    checked={filteredProducts.length > 0 && selectedProducts.size === filteredProducts.length}
                                    className="w-5 h-5 text-blue-600 rounded focus:ring-blue-500"
                                />
                            </th>
                            <th className="p-4 font-semibold">اسم المنتج</th>
                            <th className="p-4 font-semibold">سعر البيع</th>
                            <th className="p-4 font-semibold">الكمية</th>
                            <th className="p-4 font-semibold">المورد</th>
                            <th className="p-4 font-semibold">الباركود</th>
                            <th className="p-4 font-semibold">إجراءات</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredProducts.map(p => (
                            <tr key={p.id} className="border-b hover:bg-gray-50">
                                <td className="p-4">
                                    <input 
                                        type="checkbox" 
                                        checked={selectedProducts.has(p.id)} 
                                        onChange={() => handleSelectProduct(p.id)}
                                        className="w-5 h-5 text-blue-600 rounded focus:ring-blue-500"
                                    />
                                </td>
                                <td className="p-4 font-medium">{p.name}</td>
                                <td className="p-4">{p.price.toFixed(2)} ج.م</td>
                                <td className={`p-4 font-bold ${p.quantity < 10 ? 'text-red-500' : 'text-green-600'}`}>
                                    {p.quantity} {p.unit.name}
                                </td>
                                <td className="p-4">{p.supplier}</td>
                                <td className="p-4 font-mono text-sm">{p.barcode}</td>
                                <td className="p-4">
                                    <div className="flex justify-center items-center space-x-2 space-x-reverse">
                                        <button 
                                            onClick={() => { setEditingProduct(p); setIsModalOpen(true); }} 
                                            title="تعديل" 
                                            className="text-blue-600 hover:text-blue-800 p-1"
                                        >
                                            <EditIcon className="h-5 w-5"/>
                                        </button>
                                        <button 
                                            onClick={() => handlePrintBarcode(p)} 
                                            title="طباعة باركود" 
                                            className="text-green-600 hover:text-green-800 p-1"
                                        >
                                            <PrinterIcon className="h-5 w-5"/>
                                        </button>
                                        <button 
                                            onClick={() => handleDeleteProduct(p.id)} 
                                            title="حذف" 
                                            className="text-red-600 hover:text-red-800 p-1"
                                        >
                                            <TrashIcon className="h-5 w-5"/>
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                        {filteredProducts.length === 0 && (
                            <tr>
                                <td colSpan={7} className="text-center p-8 text-gray-500">
                                    لا توجد منتجات مطابقة للبحث
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
            
            {/* Modals */}
            {isModalOpen && <ProductModal 
                product={editingProduct} 
                onClose={() => {
                    setIsModalOpen(false);
                    setScannedBarcode('');
                }} 
                onSave={handleSaveProduct} 
                scannedBarcode={scannedBarcode}
            />}

            {/* Confirmation Dialog */}
            <ConfirmDialog
                isOpen={confirmDialog.isOpen}
                title={confirmDialog.title}
                message={confirmDialog.message}
                onConfirm={confirmDialog.onConfirm}
                onCancel={hideConfirmDialog}
                type={confirmDialog.type}
                confirmText={confirmDialog.type === 'danger' ? 'حذف' : 'تأكيد'}
                cancelText="إلغاء"
            />
        </div>
    );
};

export default ProductsPage;