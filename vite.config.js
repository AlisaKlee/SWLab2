import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  base: '/SWLab2/',  // ← GANZ WICHTIG: dein Repository-Name mit Slash vorne und hinten
  plugins: [vue()],
  define: {
    global: 'window', // <- das behebt den Fehler
  },
  server: {
    historyApiFallback: true, // hilft lokal beim Testen
  }
  
})
