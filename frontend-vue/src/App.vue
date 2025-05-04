<template>
  <div class="flex">
    <SideBar v-if="route.path !== '/login'" />
    <div class="flex-1">
      <router-view />
    </div>
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router'
import SideBar from './components/SideBar.vue'
const route = useRoute()
</script>