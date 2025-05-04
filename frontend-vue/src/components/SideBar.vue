<template>
  <div class="h-screen w-64 bg-blue-800 text-white flex flex-col">
    <div class="flex items-center justify-center h-20 border-b border-blue-700">
      <img src="@/assets/logo.png" alt="HeartWare" class="h-12" />
    </div>
    <nav class="flex-1 p-4 space-y-4">
      <router-link to="/patients" class="block hover:bg-blue-700 p-2 rounded">Patienten</router-link>
      <router-link to="/history" class="block hover:bg-blue-700 p-2 rounded">Verlauf</router-link>
      <router-link to="/settings" class="block hover:bg-blue-700 p-2 rounded">Einstellungen</router-link>
    </nav>
  </div>
</template>

<script setup>
// keine Logik nötig
</script>

<style scoped>
.router-link-active {
  background-color: #1e40af; /* aktive Route dunkelblau */
  font-weight: bold;
}
</style>
