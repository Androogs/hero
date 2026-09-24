import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    host: true,
    allowedHosts: [
      '.trycloudflare.com', // permite todos los de cloudflared
      'similar-farms-sarah-carlos.trycloudflare.com' // o solo este específico
    ]
  }
})