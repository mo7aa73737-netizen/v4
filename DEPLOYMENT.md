# دليل النشر - YSK SALES V3

## 🚀 نشر المشروع على GitHub Pages

### الخطوة 1: إعداد المستودع على GitHub

1. **إنشاء مستودع جديد**
   ```bash
   # إنشاء مستودع جديد على GitHub باسم YSK-SALES-V3
   ```

2. **ربط المشروع المحلي بـ GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit: YSK SALES V3 PWA"
   git branch -M main
   git remote add origin https://github.com/yourusername/YSK-SALES-V3.git
   git push -u origin main
   ```

### الخطوة 2: إعداد متغيرات البيئة في GitHub

1. اذهب إلى إعدادات المستودع → Secrets and variables → Actions
2. أضف المتغيرات التالية:

```
VITE_FIREBASE_API_KEY=your_firebase_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_project.appspot.com
VITE_FIREBASE_MESSAGING_SENDER_ID=123456789
VITE_FIREBASE_APP_ID=your_app_id
```

### الخطوة 3: تفعيل GitHub Pages

1. اذهب إلى إعدادات المست��دع → Pages
2. في Source، اختر "GitHub Actions"
3. سيتم تشغيل النشر تلقائياً عند كل push

### الخطوة 4: تحديث package.json

تأكد من تحديث الـ homepage في package.json:

```json
{
  "homepage": "https://yourusername.github.io/YSK-SALES-V3"
}
```

## 🔧 النشر اليدوي

إذا كنت تفضل النشر اليدوي:

```bash
# تثبيت التبعيات
npm install

# بناء المشروع
npm run build

# نشر على GitHub Pages
npm run deploy
```

## 🌐 النشر على خدمات أخرى

### Netlify

1. ربط المستودع بـ Netlify
2. إعداد Build command: `npm run build`
3. إعداد Publish directory: `dist`
4. إضافة متغيرات البيئة في إعدادات Netlify

### Vercel

1. ربط المستودع بـ Vercel
2. سيتم اكتشاف إعدادات Vite تلقائياً
3. إضافة متغيرات البيئة في إعدادات Vercel

### Firebase Hosting

```bash
# تثبيت Firebase CLI
npm install -g firebase-tools

# تسجيل الدخول
firebase login

# تهيئة المشروع
firebase init hosting

# بناء المشروع
npm run build

# النشر
firebase deploy
```

## 📱 تحسين PWA للنشر

### التحقق من PWA

استخدم أدوات ا��تحقق التالية:

1. **Lighthouse** في Chrome DevTools
2. **PWA Builder** من Microsoft
3. **Web.dev Measure**

### متطلبات PWA الأساسية

- ✅ HTTPS (GitHub Pages يوفر هذا تلقائياً)
- ✅ Service Worker
- ✅ Web App Manifest
- ✅ أيقونات بأحجام مختلفة
- ✅ تصميم متجاوب

## 🔒 الأمان في الإنتاج

### حماية المفاتيح

1. **لا تضع المفاتيح الحساسة في الكود**
2. **استخدم متغيرات البيئة دائماً**
3. **قم بتقييد الوصول في Firebase Console**

### إعدادات Firebase للإنتاج

```javascript
// في Firebase Console
// Authentication → Settings → Authorized domains
// أضف النطاق الخاص بك: yourusername.github.io

// Firestore → Rules
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // قواعد الأمان المناسبة لمشروعك
    match /{document=**} {
      allow read, write: if request.auth != null;
    }
  }
}
```

## 📊 مراقبة الأداء

### Google Analytics

أضف Google Analytics لمراقبة الاستخدام:

```html
<!-- في index.html -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

### Firebase Analytics

```javascript
import { getAnalytics } from "firebase/analytics";
const analytics = getAnalytics(app);
```

## 🐛 استكشاف الأخطاء

### مشاكل شائعة

1. **خطأ 404 عند التنقل**
   - تأكد من إعداد base في vite.config.ts
   - تحقق من routing في GitHub Pages

2. **Service Worker لا يعمل**
   - تأكد من HTTPS
   - تحقق من مسارات الملفات

3. **Firebase لا يتصل**
   - تحقق من متغيرات البيئة
   - تأكد من إعدادات النطاق في Firebase

### أدوات التشخيص

```bash
# فحص البناء محلياً
npm run build
npm run preview

# فحص PWA
npx lighthouse http://localhost:4173 --view
```

## 📈 تحسين الأداء

### تحسين الحجم

```javascript
// في vite.config.ts
build: {
  rollupOptions: {
    output: {
      manualChunks: {
        vendor: ['react', 'react-dom'],
        firebase: ['firebase/app', 'firebase/firestore']
      }
    }
  }
}
```

### ضغط الصور

```bash
# استخدم أدوات ضغط الصور
npm install -g imagemin-cli
imagemin *.png --out-dir=compressed
```

## 🔄 التحديثات التلقائية

### إعداد Auto-update

```javascript
// في App.tsx
useEffect(() => {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.addEventListener('controllerchange', () => {
      window.location.reload();
    });
  }
}, []);
```

## 📞 الدعم

إذا واجهت مشاكل في النشر:

- تحقق من [GitHub Actions logs](https://github.com/yourusername/YSK-SALES-V3/actions)
- راجع [Vite deployment guide](https://vitejs.dev/guide/static-deploy.html)
- تواصل معنا: support@ysk-systems.com

---

**نصائح إضافية:**

- اختبر التطبيق محلياً قبل النشر
- استخدم فروع منفصلة للتطوير
- احتفظ بنسخ احتياطية من قاعدة البيانات
- راقب الأداء بانتظام