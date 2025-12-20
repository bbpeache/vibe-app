import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // ÖNEMLİ: 'REPO_ADI' kısmını GitHub'daki repository adınla değiştir (örn: '/vibe-app/')
  // Eğer kullanıcı.github.io ana dizinine kuracaksan '/' olarak bırak.
  base: '/vibe-app/', 
  build: {
    outDir: 'dist',
  }
})