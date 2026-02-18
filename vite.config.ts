import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  build: {
    // Optimisations de build avec esbuild (plus rapide que terser)
    minify: 'esbuild',
    target: 'es2015',
    // Code splitting pour lazy loading
    rollupOptions: {
      output: {
        manualChunks: {
          'react-vendor': ['react', 'react-dom', 'react-router-dom'],
          'animation-vendor': ['framer-motion'],
          'icons-vendor': ['lucide-react']
        }
      }
    },
    // Optimiser la taille des chunks
    chunkSizeWarningLimit: 1000,
    // Compression
    cssCodeSplit: true,
    sourcemap: false
  },
  // Optimisations de performance
  optimizeDeps: {
    include: ['react', 'react-dom', 'react-router-dom', 'framer-motion', 'lucide-react']
  },
  // Optimisation esbuild
  esbuild: {
    drop: ['console', 'debugger'], // Supprimer console.log en production
    legalComments: 'none'
  }
})
