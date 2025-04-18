import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  build: {
    minify: 'terser',
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          '3d-components': ['@react-three/fiber', '@react-three/drei'],
        },
      },
    },
  },
  server: {
    hmr: {
      overlay: false,
    },
  },
});
