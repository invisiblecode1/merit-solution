import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: '/merit-solution-/', // Replace 'your-repo-name' with your actual GitHub repository name
  server: {
    host: true, // or '0.0.0.0' to expose to network
    port: 5173, // default port
  }
})
