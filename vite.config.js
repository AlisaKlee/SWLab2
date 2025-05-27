import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  base: '/SWLab2/',  // ← GANZ WICHTIG: dein Repository-Name mit Slash vorne und hinten
  plugins: [vue()],
  server: {
    historyApiFallback: true, // hilft lokal beim Testen
  }
})
