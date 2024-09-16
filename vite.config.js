import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0', // Make sure the server listens on all network interfaces
    port: process.env.PORT || 5173, // Use the Railway PORT if it's provided, fallback to 5173 for local
  },
  preview: {
    host: '0.0.0.0', // Same for preview mode
    port: process.env.PORT || 4173, // Railway PORT or fallback for local preview
  }
})
