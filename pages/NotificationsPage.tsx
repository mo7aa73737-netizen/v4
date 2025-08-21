import React, { useMemo, useState } from 'react';
import { useAppContext } from '../App';
import { Page, Product, Customer } from '../types';
import { FileTextIcon, XIcon } from '../components/icons';

// Notification model (computed, not persisted as separate entity)
interface AppNotification {
  id: string;
  type: 'stock' | 'debt' | 'admin-usage' | 'promo';
  title: string;
  message: string;
  severity: 'info' | 'warning' | 'danger';
  linkedId?: string; // productId or customerId
  createdAt: string; // ISO
}

// thresholds are taken from settings

const NotificationsPage: React.FC = () => {
  const { products, customers, currentUser, settings, saveSettings, setCurrentUser, addNotification } = useAppContext();
  const [filter, setFilter] = useState<'all'|'stock'|'debt'|'admin-usage'|'promo'>('all');
  const readIds = settings.notificationsReadIds || [];

  const generated = useMemo<AppNotification[]>(() => {
    const list: AppNotification[] = [];

    // 1) Admin usage warning: discourage using main admin for daily POS
    if (currentUser && currentUser.id === 'u1') {
      list.push({
        id: 'admin-usage',
        type: 'admin-usage',
        title: 'تنبيه أمان',
        message: 'لا يُنصح بالعمل من خلال المستخدم الرئيسي (المدير). يرجى إنشاء حساب عمل منفصل لاستخدامه يومياً.',
        severity: 'warning',
        createdAt: new Date().toISOString(),
      });
    }

    
    // 2) Low stock notifications
    const lowStock = Math.max(0, settings.lowStockThreshold ?? 10);
    products.forEach((p: Product) => {
      if (p.quantity <= lowStock) {
        list.push({
          id: `stock-${p.id}`,
          type: 'stock',
          title: 'انخفاض المخزون',
          message: `المنتج "${p.name}" منخفض المخزون: المتاح ${p.quantity} ${p.unit?.name || ''}`,
          severity: p.quantity <= 0 ? 'danger' : 'warning',
          linkedId: p.id,
          createdAt: new Date().toISOString(),
        });
      }
    });

    // 3) Debts notifications
    const debtThreshold = Math.max(0, settings.debtThreshold ?? 0);
    customers.forEach((c: Customer) => {
      if ((c.debt || 0) > debtThreshold) {
        list.push({
          id: `debt-${c.id}`,
          type: 'debt',
          title: 'ديون العملاء',
          message: `العميل "${c.name}" عليه رصيد مستحق قدره ${(c.debt || 0).toFixed(2)} ج.م` ,
          severity: 'warning',
          linkedId: c.id,
          createdAt: new Date().toISOString(),
        });
      }
    });

    // Sort by severity then time (admin usage first, then danger, warning)
    const severityOrder = { danger: 0, warning: 1, info: 2 } as const;
    return list.sort((a, b) => severityOrder[a.severity] - severityOrder[b.severity]);
  }, [products, customers, currentUser]);

  const filtered = useMemo(() => generated.filter(n => filter === 'all' || n.type === filter), [generated, filter]);

  const isRead = (id: string) => readIds.includes(id);

  const markAsRead = async (id: string) => {
    if (isRead(id)) return;
    const updated = Array.from(new Set([...(settings.notificationsReadIds || []), id]));
    await saveSettings({ ...settings, notificationsReadIds: updated });
    addNotification('تم تعليم التنبيه كمقروء');
  };

  const markAllAsRead = async () => {
    const allIds = generated.map(n => n.id);
    const updated = Array.from(new Set([...(settings.notificationsReadIds || []), ...allIds]));
    await saveSettings({ ...settings, notificationsReadIds: updated });
    addNotification('تم تعليم كل التنبيهات كمقروء');
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">التنبيهات</h1>
          <p className="text-gray-600 text-sm">تنبيهات انخفاض المخزون، الديون، وتنبيه استخدام المدير الرئيسي</p>
        </div>
        <div className="flex items-center gap-2">
          <select value={filter} onChange={e => setFilter(e.target.value as any)} className="p-2 border rounded-lg">
            <option value="all">الكل</option>
            <option value="stock">انخفاض المخزون</option>
            <option value="debt">الديون</option>
            <option value="admin-usage">استخدام المدير</option>
            <option value="promo">عروض</option>
          </select>
          <button onClick={markAllAsRead} className="px-3 py-2 bg-gray-100 hover:bg-gray-200 rounded-lg text-sm">تعليم الكل كمقروء</button>
        </div>
      </div>

      {/* Promo banner on top */}
      {(filter === 'all' || filter === 'promo') && (
        <div className={`relative overflow-hidden bg-gradient-to-l from-emerald-50 to-white border border-emerald-200 rounded-xl shadow-sm p-4 md:p-5`}>
          <div className="flex items-start justify-between">
            <div className="flex items-center gap-3">
              <img src={`${import.meta.env.BASE_URL}YSK%20PHONE.png`} alt="YSK Phone" className="w-16 h-16 object-contain rounded" />
              <div>
                <div className="flex items-center gap-2">
                  <span className="promo-badge px-2 py-0.5 rounded-full text-xs font-bold text-emerald-900 bg-emerald-200">عرض خاص</span>
                  {isRead('promo-ysk-phone') && (
                    <span className="px-2 py-0.5 rounded-full text-xs font-bold text-gray-700 bg-gray-100">مقروء</span>
                  )}
                  <h3 className="font-extrabold text-emerald-700 text-lg">YSK Phone – امسح الباركود بالموبايل</h3>
                </div>
                <p className="text-gray-800 mt-1 text-sm md:text-base">بدل ما تشتري سكانر USB، استخدم موبايلك للمسح والبيع والبحث وعرض المخزون — كل اللي محتاجه إنترنت بس.</p>
                <div className="mt-2">
                  <span className="inline-block bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-semibold animate-pulse">لفترة محدودة: 500 ج بدل 1500 ج</span>
                  <span className="inline-block ms-2 text-sm text-green-700 font-bold float-slow">وفّرت 1000 ج 👌</span>
                </div>
              </div>
            </div>
            {isRead('promo-ysk-phone') ? (
              <span className="px-2 py-1 rounded-full text-xs bg-gray-100 text-gray-700">مقروء</span>
            ) : (
              <button onClick={() => markAsRead('promo-ysk-phone')} className="text-sm text-blue-600 hover:underline">تعليم كمقروء</button>
            )}
          </div>
          <div className="mt-3 flex items-center gap-2">
            <a href="tel:01023160657" className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 text-sm">اتصل دلوقتي</a>
            <a href="https://wa.me/201023160657" target="_blank" className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 text-sm">كلّمنا واتساب</a>
            <span className="text-xs text-gray-500">لشراء الميزة وتفعيلها</span>
          </div>
          <style>
            {`
              @keyframes floatSlow { 0%{transform:translateY(0)} 50%{transform:translateY(-2px)} 100%{transform:translateY(0)} }
              .float-slow { animation: floatSlow 3s ease-in-out infinite; }
              @keyframes badgeGlow { 0%{box-shadow:0 0 0 0 rgba(16,185,129,.3)} 70%{box-shadow:0 0 0 10px rgba(16,185,129,0)} 100%{box-shadow:0 0 0 0 rgba(16,185,129,0)} }
              .promo-badge { animation: badgeGlow 2.2s ease-out infinite; }
            `}
          </style>
        </div>
      )}

      <div className="bg-white rounded-lg shadow border">
        {filtered.length === 0 ? (
          <div className="p-6 text-center text-gray-500">لا توجد تنبيهات حالياً</div>
        ) : (
          <ul>
            {filtered.map(n => (
              <li key={n.id} className={`p-4 border-b ${n.type === 'promo' ? 'bg-gradient-to-l from-green-50 to-white' : ''} flex items-start gap-3`}>
                {n.type !== 'promo' ? (
                  <>
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center ${n.severity === 'danger' ? 'bg-red-100' : n.severity === 'warning' ? 'bg-yellow-100' : 'bg-blue-100'}`}>
                      <FileTextIcon className={`h-5 w-5 ${n.severity === 'danger' ? 'text-red-600' : n.severity === 'warning' ? 'text-yellow-600' : 'text-blue-600'}`} />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <h3 className="font-semibold text-gray-800">{n.title}</h3>
                        {isRead(n.id) ? (
                          <span className="px-2 py-1 rounded-full text-xs bg-gray-100 text-gray-700">مقروء</span>
                        ) : (
                          <button onClick={() => markAsRead(n.id)} className="text-sm text-blue-600 hover:underline">تعليم كمقروء</button>
                        )}
                      </div>
                      <p className="text-gray-700 mt-1">{n.message}</p>
                    </div>
                  </>
                ) : (
                  <div className="flex-1">
                    <div className="flex items-start justify-between">
                      <div className="flex items-center gap-3">
                        <img src={`${import.meta.env.BASE_URL}YSK%20PHONE.png`} alt="YSK Phone" className="w-14 h-14 object-contain rounded" />
                        <div>
                          <h3 className="font-bold text-green-700 text-lg">عرض خاص: YSK Phone – امسح الباركود بالموبايل</h3>
                          <p className="text-gray-700 mt-1">بدل ما تشتري سكانر USB، استخدم موبايلك:</p>
                          <ul className="text-gray-700 list-disc ms-6 mt-1 space-y-1 text-sm">
                            <li>بيع وتمسح الباركود بالموبايل مباشرةً</li>
                            <li>تبحث عن المنتجات وتعرض بيانات المخزون</li>
                            <li>كل اللي محتاجه إنترنت بس — ولا أسلاك ولا أجهزة إضافية</li>
                          </ul>
                          <div className="mt-3">
                            <span className="inline-block bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-semibold">لفترة محدودة: 500 ج بدل 1500 ج</span>
                            <span className="inline-block ms-2 text-sm text-green-700 font-bold">وفّرت 1000 ج 👌</span>
                          </div>
                        </div>
                      </div>
                      {isRead(n.id) ? (
                        <span className="px-2 py-1 rounded-full text-xs bg-gray-100 text-gray-700">مقروء</span>
                      ) : (
                        <button onClick={() => markAsRead(n.id)} className="text-sm text-blue-600 hover:underline">تعليم كمقروء</button>
                      )}
                    </div>
                    <div className="mt-4 flex items-center gap-2">
                      <a href="tel:01023160657" className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 text-sm">اتصل دلوقتي</a>
                      <a href="https://wa.me/201023160657" target="_blank" className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 text-sm">كلّمنا واتساب</a>
                      <span className="text-xs text-gray-500">لشراء الميزة وتفعيلها</span>
                    </div>
                  </div>
                )}
              </li>
            ))}
          </ul>
        )}
      </div>

      {currentUser?.id === 'u1' && (
        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
          <div className="font-semibold text-yellow-800 mb-1">نصيحة أمان</div>
          <div className="text-yellow-800 text-sm">أنشئ حساب عمل منفصل للاستخدام اليومي وحافظ على حساب المدير للاعدادات فقط.</div>
        </div>
      )}
    </div>
  );
};

export default NotificationsPage;
