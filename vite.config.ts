import path from 'path';
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => {
    const env = loadEnv(mode, '.', '');
    return {
      base: '/v4/',
      plugins: [
        react()
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
          input: {
            main: path.resolve(__dirname, 'index.html')
          },
          output: {
            manualChunks: {
              vendor: ['react', 'react-dom'],
              firebase: ['firebase/app', 'firebase/firestore'],
              charts: ['recharts'],
              pdf: ['jspdf', 'jspdf-autotable']
            }
          }
        }
      },
      publicDir: 'public'
    };
});
