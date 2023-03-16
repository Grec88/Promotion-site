import path from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
  root: path.resolve(__dirname, './'),
  build: {
    outDir: path.resolve(__dirname, './dist'),
    rollupOptions: {
      input: {
        index: path.resolve(__dirname, './index.html'),
        about: path.resolve(__dirname, './modules.html')
      }
    }
  }
}) 