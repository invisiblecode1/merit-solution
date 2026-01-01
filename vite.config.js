import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: '/merit-solution/',  // Change from './' to '/merit-solution/'
  server: {
    host: true,
    port: 5173,
  }
})
