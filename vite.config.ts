import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig(({ mode }) => ({
  plugins: [react()],
  base: mode === 'production'
    ? '/Filadelfia-celula/' // GitHub Pages
    : '/',                  // Netlify e dev
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
}))
