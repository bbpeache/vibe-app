import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // Repo name for GitHub Pages deployment
  base: '/vibe-app/', 
  build: {
    outDir: 'dist',
  }
})
