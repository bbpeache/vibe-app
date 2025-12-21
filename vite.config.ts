import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // Use relative base path to support any repository name or subfolder deployment
  base: './', 
  build: {
    outDir: 'dist',
  }
})