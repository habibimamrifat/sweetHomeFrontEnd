import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: process.env.PORT || 5173, // Use Railway's dynamic port if available
  },
  preview: {
    port: process.env.PORT || 4173, // Use Railway's dynamic port for preview mode
  }
})
