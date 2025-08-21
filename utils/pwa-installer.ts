// PWA Installation Utilities
export class PWAInstaller {
    private deferredPrompt: any = null;
    private isInstalled = false;

    constructor() {
        this.init();
    }

    private init() {
        // Listen for the beforeinstallprompt event
        window.addEventListener('beforeinstallprompt', (e) => {
            console.log('PWA: beforeinstallprompt event fired');
            e.preventDefault();
            this.deferredPrompt = e;
            this.showInstallButton();
        });

        // Listen for the appinstalled event
        window.addEventListener('appinstalled', () => {
            console.log('PWA: App was installed');
            this.isInstalled = true;
            this.hideInstallButton();
            this.showInstalledMessage();
        });

        // Check if app is already installed
        this.checkIfInstalled();
    }

    private checkIfInstalled() {
        // Check if running in standalone mode (installed PWA)
        if (window.matchMedia('(display-mode: standalone)').matches) {
            this.isInstalled = true;
            console.log('PWA: App is running in standalone mode');
        }

        // Check for iOS Safari
        if ((window.navigator as any).standalone === true) {
            this.isInstalled = true;
            console.log('PWA: App is running in iOS standalone mode');
        }
    }

    public async installApp(): Promise<boolean> {
        if (!this.deferredPrompt) {
            console.log('PWA: No deferred prompt available');
            return false;
        }

        try {
            // Show the install prompt
            this.deferredPrompt.prompt();
            
            // Wait for the user to respond to the prompt
            const { outcome } = await this.deferredPrompt.userChoice;
            
            console.log(`PWA: User response to the install prompt: ${outcome}`);
            
            if (outcome === 'accepted') {
                this.deferredPrompt = null;
                return true;
            }
            
            return false;
        } catch (error) {
            console.error('PWA: Error during installation:', error);
            return false;
        }
    }

    public canInstall(): boolean {
        return this.deferredPrompt !== null && !this.isInstalled;
    }

    public isAppInstalled(): boolean {
        return this.isInstalled;
    }

    private showInstallButton() {
        // Create install button if it doesn't exist
        if (!document.getElementById('pwa-install-button')) {
            const button = document.createElement('button');
            button.id = 'pwa-install-button';
            button.innerHTML = `
                <div style="display: flex; align-items: center; gap: 8px;">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"/>
                    </svg>
                    تثبيت التطبيق
                </div>
            `;
            button.style.cssText = `
                position: fixed;
                bottom: 20px;
                left: 20px;
                background: #1f2937;
                color: white;
                border: none;
                padding: 12px 20px;
                border-radius: 25px;
                font-family: 'Cairo', sans-serif;
                font-weight: bold;
                cursor: pointer;
                box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
                z-index: 1000;
                transition: all 0.3s ease;
                font-size: 14px;
            `;

            button.addEventListener('mouseenter', () => {
                button.style.transform = 'translateY(-2px)';
                button.style.boxShadow = '0 6px 20px rgba(0, 0, 0, 0.4)';
            });

            button.addEventListener('mouseleave', () => {
                button.style.transform = 'translateY(0)';
                button.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.3)';
            });

            button.addEventListener('click', async () => {
                const installed = await this.installApp();
                if (installed) {
                    this.hideInstallButton();
                }
            });

            document.body.appendChild(button);
        }
    }

    private hideInstallButton() {
        const button = document.getElementById('pwa-install-button');
        if (button) {
            button.remove();
        }
    }

    private showInstalledMessage() {
        // Show a temporary success message
        const message = document.createElement('div');
        message.innerHTML = `
            <div style="display: flex; align-items: center; gap: 8px;">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                </svg>
                تم تثبيت التطبيق بنجاح!
            </div>
        `;
        message.style.cssText = `
            position: fixed;
            bottom: 20px;
            left: 20px;
            background: #10b981;
            color: white;
            padding: 12px 20px;
            border-radius: 25px;
            font-family: 'Cairo', sans-serif;
            font-weight: bold;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
            z-index: 1000;
            font-size: 14px;
            animation: slideIn 0.3s ease;
        `;

        // Add animation
        const style = document.createElement('style');
        style.textContent = `
            @keyframes slideIn {
                from { transform: translateX(-100%); opacity: 0; }
                to { transform: translateX(0); opacity: 1; }
            }
        `;
        document.head.appendChild(style);

        document.body.appendChild(message);

        // Remove message after 3 seconds
        setTimeout(() => {
            message.remove();
            style.remove();
        }, 3000);
    }

    public showInstallInstructions() {
        const instructions = this.getInstallInstructions();
        if (instructions) {
            alert(instructions);
        }
    }

    private getInstallInstructions(): string | null {
        const userAgent = navigator.userAgent.toLowerCase();
        
        if (userAgent.includes('chrome') && !userAgent.includes('edg')) {
            return 'لتثبيت التطبيق:\n1. اضغط على أيقونة التثبيت في شريط العناوين\n2. أو اضغط على القائمة (⋮) ← تثبيت YSK SALES';
        }
        
        if (userAgent.includes('firefox')) {
            return 'لتثبيت التطبيق:\n1. اضغط على القائمة (☰)\n2. اختر "تثبيت هذا الموقع كتطبيق"';
        }
        
        if (userAgent.includes('safari') && userAgent.includes('iphone')) {
            return 'لتثبيت التطبيق على iPhone:\n1. اضغط على أيقونة المشاركة (⬆️)\n2. اختر "إضافة إلى الشاشة الرئيسية"';
        }
        
        if (userAgent.includes('safari') && userAgent.includes('ipad')) {
            return 'لتثبيت التطبيق على iPad:\n1. اضغط على أيقونة المشاركة (⬆️)\n2. اختر "إضافة إلى الشاشة الرئيسية"';
        }
        
        if (userAgent.includes('android')) {
            return 'لتثبيت التطبيق على Android:\n1. اضغط على القائمة في المتصفح\n2. اختر "إضافة إلى الشاشة الرئيسية" أو "تثبيت التطبيق"';
        }
        
        return 'يمكنك تثبيت هذا التطبيق من خلال خيارات المتصفح الخاص بك';
    }
}

// Create global instance
export const pwaInstaller = new PWAInstaller();