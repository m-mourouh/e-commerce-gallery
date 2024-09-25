import { fileURLToPath, URL } from 'node:url'
import { resolve } from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  server: {
    watch: {
      usePolling: true, 
    },
    hmr: {
      overlay: true,
    },
  },
  test: {
    include: ['src/**/*.spec.ts'],
    environment: 'jsdom',
    setupFiles: [resolve(__dirname, 'src/components/__tests__/setup/setup.ts')],
    reporters: 'dot',
  },
})
