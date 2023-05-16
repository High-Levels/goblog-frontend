import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    proxy: {
      '/api': 'http://13.239.136.211',
    },
    host: '0.0.0.0',
    port: '8080'
  },
  plugins: [react()],
})
