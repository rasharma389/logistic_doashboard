import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  server: {
    port: 5173,
    proxy: {
      // Do NOT rewrite away /analytics if Streamlit uses baseUrlPath=analytics
      '/analytics': {
        target: 'http://localhost:8501',
        changeOrigin: true,
        ws: true,
        // no rewrite
      },
    },
    fs: {
      allow: ['..']
    }
  },
  publicDir: 'public',
});
