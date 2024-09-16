import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0', // Listen on all network interfaces
    port: Number(process.env.PORT) || 5173, // Use the Railway PORT or fallback to 5173 for local dev
  },
  preview: {
    host: '0.0.0.0', // Ensure the preview listens on all network interfaces
    port: Number(process.env.PORT) || 4173, // Use Railway's PORT or fallback for local preview
  }
})
