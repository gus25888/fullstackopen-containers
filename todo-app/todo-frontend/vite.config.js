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
    host: true, // escucha en 0.0.0.0 (para funcionar en Docker)
    watch: {
      usePolling: true, // detecta cambios con volúmenes
    },
    allowedHosts: ['app', 'localhost', '127.0.0.1'],
  },
})
