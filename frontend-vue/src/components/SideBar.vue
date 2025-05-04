<template>
  <div class="h-screen w-64 bg-green-200 text-black flex flex-col">
    <div class="flex items-center justify-center h-20 border-b border-green-300">
      <img src="@/assets/logo.png" alt="HeartWare" class="h-12" />
    </div>
    <nav class="flex-1 p-4 space-y-4">
      <router-link to="/patients" class="flex items-center gap-3 block hover:bg-green-300 p-2 rounded">
        <i class="pi pi-users text-xl"></i>
        <span>Patienten</span>
      </router-link>
      <router-link to="/history" class="flex items-center gap-3 block hover:bg-green-300 p-2 rounded">
        <i class="pi pi-history text-xl"></i>
        <span>Verlauf</span>
      </router-link>
      <router-link to="/settings" class="flex items-center gap-3 block hover:bg-green-300 p-2 rounded">
        <i class="pi pi-cog text-xl"></i>
        <span>Einstellungen</span>
      </router-link>
    </nav>
  </div>
</template>

<script setup>

</script>

<style scoped>
.router-link-active {
  background-color:rgba(106, 245, 189, 0.94); 
  font-weight: bold;
}
</style>
