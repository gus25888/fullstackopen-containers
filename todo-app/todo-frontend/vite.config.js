import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: './testSetup.js',
  },
  server: {
    allowedHosts: ['app', 'localhost', '127.0.0.1'],
  },
})
