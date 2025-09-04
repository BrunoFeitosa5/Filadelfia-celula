import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/C-lulaFilad-lfia/', // 👈 nome do repositório
})
