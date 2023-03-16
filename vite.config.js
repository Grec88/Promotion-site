import { resolve } from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        nested: resolve(__dirname, 'modules.html'),
      },
    },
  },
  // config options
  root: './', // input directory
  build: {
    outDir: './dist' // output directory
  }
}) 