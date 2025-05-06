<template>
  <div class="flex">
    <!-- Sidebar nur anzeigen, wenn NICHT auf der Login-Seite -->
    <Sidebar v-if="route.path !== '/'" />

    <div class="flex-1">
      <router-view />
    </div>
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router'
import Sidebar from './components/Sidebar.vue'

const route = useRoute()
</script>
