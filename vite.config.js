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
    terserOptions: {           
      compress: {               
        drop_console: true,     
        drop_debugger: true
      }
    },
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