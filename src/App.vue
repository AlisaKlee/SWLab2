<template>
  <div class="app-layout">
    <!-- Sidebar nur anzeigen, wenn NICHT auf Login-Seite -->
    <Sidebar v-if="!isLoginPage" />

    <img :src="logo" alt="HeartWare Logo" class="global-logo" />

    <!-- Hauptinhalt -->
    <div :class="['main-area', { 'no-sidebar': isLoginPage }]">
      <router-view />
    </div>
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router';
import { computed } from 'vue';
import Sidebar from './components/Sidebar.vue';
import logo from './assets/HeartWareLogo.png';

const route = useRoute();

// Login-Seiten erkennen – reaktiv
const isLoginPage = computed(() =>
  route.path === '/' || route.path === '/login'
);
</script>

<style scoped>
.app-layout {
  display: flex;
  min-height: 100vh;
  background-color: #fcfcfc;
  position: relative;
}

.main-area {
  flex: 1;
  padding: 2rem;
  margin-left: 64px;
  transition: margin-left 0.2s ease;
}

.main-area.no-sidebar {
  margin-left: 0;
}

.global-logo {
  position: fixed;
  top: 1rem;
  right: 2rem;
  width: 120px;
  height: auto;
  opacity: 0.95;
  z-index: 100;
}
</style>