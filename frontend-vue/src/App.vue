<template>
  <div class="app-layout">
    <!-- Sidebar anzeigen, außer auf Login-Seite -->
    <Sidebar v-if="route.path !== '/'" />

    <!-- Hauptinhalt (gerendert über router-view) -->
    <div class="main-area">
      <router-view />
    </div>
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router'
import Sidebar from './components/Sidebar.vue'

const route = useRoute()
</script>

<style scoped>
.app-layout {
  display: flex;
  min-height: 100vh;
  background-color: #fcfcfc; /* Logo-Hintergrundfarbe */
}

.main-area {
  flex: 1;
  padding: 2rem;
}
</style>
