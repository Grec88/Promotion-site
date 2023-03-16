import path from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    outDir: './dist',
    rollupOptions: {
      input: {
        index: path.resolve(__dirname, './index.html'),
        about: path.resolve(__dirname, './modules.html')
      }
    }
  }
}) 