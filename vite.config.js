import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: '/',  // Changed from '/merit-solution/' to '/'
  server: {
    host: true,
    port: 5173,
  }
})
