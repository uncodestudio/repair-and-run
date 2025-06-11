import { defineConfig } from 'vite'

export default defineConfig({
  server: {
    port: 3000,
    open: true,
    cors: true
  },
  
  build: {
    outDir: 'dist',
    minify: 'terser',
    lib: {
      entry: 'main.js',
      name: 'WebflowApp',
      fileName: 'main',
      formats: ['es']
    },
    rollupOptions: {
      output: {
        entryFileNames: 'main.js'
      }
    }
  }
})