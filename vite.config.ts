import path from 'path';
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig(({ mode }) => {
    const env = loadEnv(mode, '.', '');
    return {
      base: '/v4/',
      plugins: [
        react(),
        VitePWA({
          registerType: 'autoUpdate',
          workbox: {
            globPatterns: ['**/*.{js,css,html,ico,png,svg,woff2}'],
            runtimeCaching: [
              {
                urlPattern: /^https:\/\/fonts\.googleapis\.com\/.*/i,
                handler: 'CacheFirst',
                options: {
                  cacheName: 'google-fonts-cache',
                  expiration: {
                    maxEntries: 10,
                    maxAgeSeconds: 60 * 60 * 24 * 365 // 1 year
                  }
                }
              },
              {
                urlPattern: /^https:\/\/fonts\.gstatic\.com\/.*/i,
                handler: 'CacheFirst',
                options: {
                  cacheName: 'gstatic-fonts-cache',
                  expiration: {
                    maxEntries: 10,
                    maxAgeSeconds: 60 * 60 * 24 * 365 // 1 year
                  }
                }
              },
              {
                urlPattern: /^https:\/\/cdn\.tailwindcss\.com\/.*/i,
                handler: 'StaleWhileRevalidate',
                options: {
                  cacheName: 'tailwind-cache',
                  expiration: {
                    maxEntries: 5,
                    maxAgeSeconds: 60 * 60 * 24 * 30 // 30 days
                  }
                }
              }
            ]
          },
          includeAssets: ['YSK-SALES.png'],
          manifest: {
            name: 'YSK SALES | نظام إدارة المبيعات',
            short_name: 'YSK SALES',
            description: 'نظام متكامل لإدارة المبيعات والمخزون مع إمكانيات العمل بدون إنترنت',
            theme_color: '#1f2937',
            background_color: '#f3f4f6',
            display: 'standalone',
            orientation: 'portrait',
            scope: '/v4/',
            start_url: '/v4/',
            lang: 'ar',
            dir: 'rtl',
            icons: [
              {
                src: 'YSK-SALES.png',
                sizes: 'any',
                type: 'image/png',
                purpose: 'any maskable'
              }
            ],
            categories: ['business', 'productivity', 'finance'],
            shortcuts: [
              {
                name: 'نقطة البيع',
                short_name: 'POS',
                description: 'فتح نقطة البيع مباشرة',
                url: '/v4/?page=pos',
                icons: [{ src: 'YSK-SALES.png', sizes: '96x96' }]
              },
              {
                name: 'المنتجات',
                short_name: 'Products',
                description: 'إدارة المنتجات',
                url: '/v4/?page=products',
                icons: [{ src: 'YSK-SALES.png', sizes: '96x96' }]
              }
            ]
          }
        })
      ],
      define: {
        'process.env.API_KEY': JSON.stringify(env.GEMINI_API_KEY),
        'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY)
      },
      resolve: {
        alias: {
          '@': path.resolve(__dirname, '.'),
        }
      },
      build: {
        outDir: 'dist',
        assetsDir: 'assets',
        sourcemap: false,
        rollupOptions: {
          output: {
            manualChunks: {
              vendor: ['react', 'react-dom'],
              firebase: ['firebase/app', 'firebase/firestore'],
              charts: ['recharts'],
              pdf: ['jspdf', 'jspdf-autotable']
            }
          }
        }
      }
    };
});
