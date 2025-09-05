import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig(() => ({
  plugins: [react()],
  base: process.env.NETLIFY === 'true'
    ? '/'                  // Netlify (produção e dev)
    : '/Filadelfia-celula/', // GitHub Pages
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
}))
