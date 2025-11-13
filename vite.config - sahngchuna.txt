import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/vite-project/', // 🔑 GitHub Pages 仓库名
  plugins: [react()],
})
