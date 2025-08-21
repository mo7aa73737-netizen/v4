import React, { useMemo, useState } from 'react';
import { useAppContext } from '../App';
import { Supplier, Product, Purchase, PurchaseItem } from '../types';
import { PlusCircleIcon, SearchIcon, EditIcon, TrashIcon, XIcon, DollarSignIcon } from '../components/icons';

const SettleBalanceModal = ({ supplier, onClose, onSettle }: { supplier: Supplier, onClose: () => void, onSettle: (amount: number) => void }) => {
  const [amount, setAmount] = useState(supplier.balance.toString());
  const handleSettle = () => {
    const settleAmount = parseFloat(amount);
    if (!isNaN(settleAmount) && settleAmount > 0 && settleAmount <= supplier.balance) {
      onSettle(settleAmount);
      onClose();
    } else {
      alert('الرجاء إدخال مبلغ صحيح.');
    }
  };
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex justify-center items-center z-50">
      <div className="bg-white rounded-lg shadow-xl p-8 w-full max-w-md">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">تسوية رصيد {supplier.name}</h2>
          <button onClick={onClose}><XIcon className="h-6 w-6" /></button>
        </div>
        <div>
          <p className="mb-4">الرصيد الحالي: <span className="font-bold text-red-600">{supplier.balance.toFixed(2)} ج.م</span></p>
          <label className="block text-sm font-medium text-gray-700 mb-1">المبلغ المسدد</label>
          <input type="number" value={amount} onChange={e => setAmount(e.target.value)} className="p-2 border rounded w-full" min="0.01" step="0.01" />
        </div>
        <div className="mt-6 flex justify-end gap-2">
          <button onClick={onClose} className="px-4 py-2 bg-gray-200 rounded">إلغاء</button>
          <button onClick={handleSettle} className="px-4 py-2 bg-green-600 text-white rounded">تسوية</button>
        </div>
      </div>
    </div>
  );
};

const SupplierModal = ({ supplier, onClose, onSave }: { supplier: Supplier | null, onClose: () => void, onSave: (supplier: Supplier, isNew: boolean) => Promise<void> }) => {
  const [edited, setEdited] = useState<Supplier>(
    supplier || { id: '', name: '', phone: '', address: '', notes: '', balance: 0, purchaseCount: 0, lastTransaction: '' }
  );
  const isNew = !supplier;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setEdited(prev => ({ ...prev, [name]: value }));
  };

  const handleSave = async () => {
    if (!edited.name.trim()) return;
    const finalItem: Supplier = { ...edited, id: edited.id || `s${Date.now()}` };
    await onSave(finalItem, isNew);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex justify-center items-center z-50">
      <div className="bg-white rounded-lg shadow-xl p-8 w-full max-w-lg">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">{isNew ? 'إضافة مورد' : 'تعديل مورد'}</h2>
          <button onClick={onClose}><XIcon className="h-6 w-6" /></button>
        </div>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">الاسم</label>
            <input name="name" value={edited.name} onChange={handleChange} className="p-2 border rounded w-full" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">رقم الهاتف</label>
            <input name="phone" value={edited.phone} onChange={handleChange} className="p-2 border rounded w-full" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">العنوان</label>
            <input name="address" value={edited.address} onChange={handleChange} className="p-2 border rounded w-full" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">ملاحظات</label>
            <textarea name="notes" value={edited.notes} onChange={handleChange} className="p-2 border rounded w-full h-20" />
          </div>
        </div>
        <div className="mt-6 flex justify-end gap-2">
          <button onClick={onClose} className="px-4 py-2 bg-gray-200 rounded">إلغاء</button>
          <button onClick={handleSave} className="px-4 py-2 bg-blue-600 text-white rounded">حفظ</button>
        </div>
      </div>
    </div>
  );
};

const SuppliersPage: React.FC = () => {
  const { suppliers, saveSuppliers, addNotification, products, saveProducts, purchases, savePurchases } = useAppContext();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editing, setEditing] = useState<Supplier | null>(null);
  const [settling, setSettling] = useState<Supplier | null>(null);
  const [search, setSearch] = useState('');
  const [purchaseModal, setPurchaseModal] = useState<{ open: boolean; supplier: Supplier | null; items: { productId: string; quantity: string; unitCost: string; }[]; discountType: 'percentage'|'fixed'; discountValue: string; taxType: 'percentage'|'fixed'; taxValue: string; amountPaid: string; note: string; }>({ open: false, supplier: null, items: [], discountType: 'percentage', discountValue: '0', taxType: 'percentage', taxValue: '0', amountPaid: '0', note: '' });

  const filtered = useMemo(() => {
    return suppliers.filter(s =>
      s.name.toLowerCase().includes(search.toLowerCase()) ||
      s.phone.includes(search)
    );
  }, [suppliers, search]);

  const handleSave = async (item: Supplier, isNew: boolean) => {
    if (isNew) {
      await saveSuppliers([item, ...suppliers]);
      addNotification('تمت إضافة المورد');
    } else {
      await saveSuppliers(suppliers.map(s => s.id === item.id ? item : s));
      addNotification('تم تحديث المورد');
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm('هل أنت متأكد من حذف المورد؟')) return;
    await saveSuppliers(suppliers.filter(s => s.id !== id));
    addNotification('تم حذف المورد', 'success');
  };

  const handleSettle = async (amount: number) => {
    if (!settling) return;
    const updated = suppliers.map(s => s.id === settling.id ? { ...s, balance: Math.max(0, s.balance - amount) } : s);
    await saveSuppliers(updated);
    addNotification(`تم تسديد مبلغ ${amount.toFixed(2)} ج.م للمورد ${settling.name}`);
    setSettling(null);
  };

  const totalBalance = useMemo(() => filtered.reduce((s, x) => s + (x.balance || 0), 0), [filtered]);

  const openPurchase = (supplier: Supplier) => {
    setPurchaseModal({ open: true, supplier, items: [{ productId: '', quantity: '', unitCost: '' }], discountType: 'percentage', discountValue: '0', taxType: 'percentage', taxValue: '0', amountPaid: '0', note: '' });
  };

  const addPurchaseRow = () => setPurchaseModal(prev => ({ ...prev, items: [...prev.items, { productId: '', quantity: '', unitCost: '' }] }));
  const removePurchaseRow = (idx: number) => setPurchaseModal(prev => ({ ...prev, items: prev.items.filter((_, i) => i !== idx) }));
  const updatePurchaseRow = (idx: number, patch: Partial<{ productId: string; quantity: string; unitCost: string; }>) => setPurchaseModal(prev => ({ ...prev, items: prev.items.map((r, i) => i === idx ? { ...r, ...patch } : r) }));

  const computePurchaseSubtotal = () => purchaseModal.items.reduce((s, r) => s + ((parseFloat(r.quantity || '0') || 0) * (parseFloat(r.unitCost || '0') || 0)), 0);

  const finalizePurchase = async () => {
    const sup = purchaseModal.supplier!;
    const items: PurchaseItem[] = purchaseModal.items
      .filter(r => r.productId && (parseFloat(r.quantity || '0') || 0) > 0)
      .map(r => {
        const prod = products.find(p => p.id === r.productId)!;
        return { productId: prod.id, productName: prod.name, quantity: parseFloat(r.quantity), unitCost: parseFloat(r.unitCost || '0') };
      });
    if (items.length === 0) { addNotification('الرجاء إضافة صنف واحد على الأقل', 'error'); return; }

    const subtotal = computePurchaseSubtotal();
    const discount = { type: purchaseModal.discountType, value: parseFloat(purchaseModal.discountValue || '0') } as any;
    const taxableBase = discount.type === 'percentage' ? subtotal - subtotal * (discount.value/100) : subtotal - discount.value;
    const tax = { type: purchaseModal.taxType, value: parseFloat(purchaseModal.taxValue || '0') } as any;
    const taxAmount = tax.type === 'percentage' ? taxableBase * (tax.value/100) : tax.value;
    const total = Math.max(0, taxableBase + taxAmount);
    const amountPaid = Math.max(0, parseFloat(purchaseModal.amountPaid || '0'));

    // تحديث مخزون المنتجات (إضافة الكمية وتحديث سعر الشراء الاختياري)
    const updatedProducts = [...products];
    items.forEach(it => {
      const idx = updatedProducts.findIndex(p => p.id === it.productId);
      if (idx > -1) {
        updatedProducts[idx].quantity = (updatedProducts[idx].quantity || 0) + it.quantity;
        if (it.unitCost > 0) {
          updatedProducts[idx].purchasePrice = it.unitCost;
        }
        // تعيين المورد الاسم النصي على المنتج إن لزم
        if (sup.name && !updatedProducts[idx].supplier) {
          updatedProducts[idx].supplier = sup.name;
        }
      }
    });
    await saveProducts(updatedProducts);

    // تحديث رصيد المورد: نزيد بما تبقى غير مسدد
    const remaining = Math.max(0, total - amountPaid);
    const updatedSuppliers = suppliers.map(s => s.id === sup.id ? {
      ...s,
      balance: (s.balance || 0) + remaining,
      purchaseCount: (s.purchaseCount || 0) + 1,
      lastTransaction: new Date().toLocaleDateString('en-CA')
    } : s);
    await saveSuppliers(updatedSuppliers);

    // حفظ عملية الشراء
    const newPurchase: Purchase = {
      id: `PO-${Date.now()}`,
      supplierId: sup.id,
      supplierName: sup.name,
      date: new Date().toLocaleDateString('en-CA'),
      items,
      subtotal,
      discount,
      tax,
      total,
      amountPaid,
      note: purchaseModal.note || ''
    };
    await (savePurchases ? savePurchases([newPurchase, ...(purchases || [])]) : Promise.resolve());

    addNotification(`تم تسجيل شراء من ${sup.name} بقيمة ${total.toFixed(2)} ج.م`);
    setPurchaseModal(prev => ({ ...prev, open: false }));
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">إدارة الموردين</h1>
        <div className="flex items-center gap-2">
          <button onClick={() => { setEditing(null); setIsModalOpen(true); }} className="flex items-center bg-blue-600 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-700 transition">
            <PlusCircleIcon className="h-5 w-5 me-2" />
            إضافة مورد
          </button>
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-md mb-6">
        <div className="relative">
          <input
            type="text"
            placeholder="ابحث بالاسم أو رقم الهاتف..."
            className="w-full p-3 ps-10 border rounded-lg"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <SearchIcon className="absolute top-1/2 -translate-y-1/2 right-3 h-5 w-5 text-gray-400" />
        </div>
      </div>

      <div className="flex justify-between items-center mb-4">
        <span className="text-sm text-gray-600">عدد الموردين: <span className="font-bold text-blue-600">{filtered.length}</span></span>
        <span className="text-sm text-red-700">إجمالي رصيد الموردين: <span className="font-bold">{totalBalance.toFixed(2)} ج.م</span></span>
      </div>

      <div className="bg-white rounded-lg shadow-md overflow-x-auto">
        <table className="w-full text-right">
          <thead className="bg-gray-50">
            <tr>
              <th className="p-4 font-semibold">الاسم</th>
              <th className="p-4 font-semibold">رقم الهاتف</th>
              <th className="p-4 font-semibold">العنوان</th>
              <th className="p-4 font-semibold">الرصيد</th>
              <th className="p-4 font-semibold">آخر معاملة</th>
              <th className="p-4 font-semibold">إجراءات</th>
            </tr>
          </thead>
          <tbody>
            {filtered.map(s => (
              <tr key={s.id} className="border-b hover:bg-gray-50">
                <td className="p-4">{s.name}</td>
                <td className="p-4" style={{direction:'ltr',textAlign:'right'}}>{s.phone}</td>
                <td className="p-4">{s.address}</td>
                <td className={`p-4 font-bold ${s.balance > 0 ? 'text-red-600' : 'text-green-600'}`}>{(s.balance || 0).toFixed(2)} ج.م</td>
                <td className="p-4">{s.lastTransaction || 'لا يوجد'}</td>
                <td className="p-4">
                  <div className="flex justify-center items-center space-x-2 space-x-reverse">
                    <button onClick={() => { setEditing(s); setIsModalOpen(true); }} className="text-blue-600 hover:text-blue-800"><EditIcon className="h-5 w-5" /></button>
                    <button onClick={() => handleDelete(s.id)} className="text-red-600 hover:text-red-800"><TrashIcon className="h-5 w-5" /></button>
                    <button onClick={() => openPurchase(s)} className="text-sm bg-blue-500 text-white px-2 py-1 rounded hover:bg-blue-600 flex items-center"><PlusCircleIcon className="h-4 w-4 me-1" />شراء</button>
                    {s.balance > 0 && <button onClick={() => setSettling(s)} className="text-sm bg-green-500 text-white px-2 py-1 rounded hover:bg-green-600 flex items-center"><DollarSignIcon className="h-4 w-4 me-1" />تسوية</button>}
                  </div>
                </td>
              </tr>
            ))}
            {filtered.length === 0 && (
              <tr>
                <td colSpan={6} className="text-center p-8 text-gray-500">لا توجد نتائج</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {isModalOpen && (
        <SupplierModal supplier={editing} onClose={() => setIsModalOpen(false)} onSave={handleSave} />
      )}
      {settling && (
        <SettleBalanceModal supplier={settling} onClose={() => setSettling(null)} onSettle={handleSettle} />
      )}

      {purchaseModal.open && purchaseModal.supplier && (
        <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex justify-center items-center z-50 p-4">
          <div className="bg-white rounded-lg shadow-xl w-full max-w-4xl">
            <div className="p-4 border-b flex items-center justify-between">
              <h3 className="text-xl font-bold">عملية شراء من {purchaseModal.supplier.name}</h3>
              <button onClick={() => setPurchaseModal(prev => ({ ...prev, open: false }))}><XIcon className="h-6 w-6"/></button>
            </div>
            <div className="p-4 space-y-4">
              <div className="overflow-x-auto">
                <table className="w-full text-right">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="p-2">الصنف</th>
                      <th className="p-2">الكمية</th>
                      <th className="p-2">سعر الشراء</th>
                      <th className="p-2"></th>
                    </tr>
                  </thead>
                  <tbody>
                    {purchaseModal.items.map((row, idx) => (
                      <tr key={idx} className="border-b">
                        <td className="p-2">
                          <select value={row.productId} onChange={e => updatePurchaseRow(idx, { productId: e.target.value })} className="p-2 border rounded w-full">
                            <option value="">اختر منتج</option>
                            {products.map((p: Product) => <option key={p.id} value={p.id}>{p.name}</option>)}
                          </select>
                        </td>
                        <td className="p-2">
                          <input type="number" min={0} value={row.quantity} onChange={e => updatePurchaseRow(idx, { quantity: e.target.value })} className="p-2 border rounded w-full" />
                        </td>
                        <td className="p-2">
                          <input type="number" min={0} step="0.01" value={row.unitCost} onChange={e => updatePurchaseRow(idx, { unitCost: e.target.value })} className="p-2 border rounded w-full" />
                        </td>
                        <td className="p-2">
                          <button onClick={() => removePurchaseRow(idx)} className="text-red-600 hover:text-red-800">حذف</button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div>
                <button onClick={addPurchaseRow} className="text-sm text-blue-600">+ إضافة صنف</button>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <div className="flex items-center gap-2">
                  <span>خصم</span>
                  <input type="number" value={purchaseModal.discountValue} onChange={e => setPurchaseModal(prev => ({ ...prev, discountValue: e.target.value }))} className="p-2 border rounded w-24 text-center" />
                  <button onClick={() => setPurchaseModal(prev => ({ ...prev, discountType: prev.discountType === 'percentage' ? 'fixed' : 'percentage' }))} className="px-2 py-1 bg-gray-100 rounded">{purchaseModal.discountType === 'percentage' ? '%' : 'ج.م'}</button>
                </div>
                <div className="flex items-center gap-2">
                  <span>ضريبة</span>
                  <input type="number" value={purchaseModal.taxValue} onChange={e => setPurchaseModal(prev => ({ ...prev, taxValue: e.target.value }))} className="p-2 border rounded w-24 text-center" />
                  <button onClick={() => setPurchaseModal(prev => ({ ...prev, taxType: prev.taxType === 'percentage' ? 'fixed' : 'percentage' }))} className="px-2 py-1 bg-gray-100 rounded">{purchaseModal.taxType === 'percentage' ? '%' : 'ج.م'}</button>
                </div>
                <div className="flex items-center gap-2">
                  <span>المدفوع</span>
                  <input type="number" value={purchaseModal.amountPaid} onChange={e => setPurchaseModal(prev => ({ ...prev, amountPaid: e.target.value }))} className="p-2 border rounded w-32 text-center" />
                </div>
                <div className="flex items-center gap-2">
                  <span>ملاحظة</span>
                  <input type="text" value={purchaseModal.note} onChange={e => setPurchaseModal(prev => ({ ...prev, note: e.target.value }))} className="p-2 border rounded flex-1" />
                </div>
              </div>

              <div className="bg-gray-50 p-3 rounded border text-sm">
                <div className="flex items-center justify-between"><span>الإجمالي الفرعي</span><span>{computePurchaseSubtotal().toFixed(2)} ج.م</span></div>
              </div>
            </div>
            <div className="p-4 border-t flex items-center justify-end gap-2">
              <button onClick={() => setPurchaseModal(prev => ({ ...prev, open: false }))} className="px-4 py-2 bg-gray-200 rounded">إلغاء</button>
              <button onClick={finalizePurchase} className="px-4 py-2 bg-blue-600 text-white rounded">تسجيل الشراء</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SuppliersPage;
