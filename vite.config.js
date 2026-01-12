import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: '/merit-solution/',  // Replace with your actual repo name
  server: {
    host: true,
    port: 5173,
  }
})
