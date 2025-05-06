<template>
  <div class="h-screen w-16 bg-white border-r shadow-md flex flex-col items-center justify-center space-y-6">
    <router-link to="/welcome-hospital" class="icon-link" title="Home">
      <i class="pi pi-home text-2xl"></i>
      </router-link>
    <router-link to="/settings" class="icon-link" title="Einstellungen">
      <i class="pi pi-cog text-2xl"></i>
      </router-link>
    <router-link to="/" class="icon-link" title="Logout">
      <i class="pi pi-sign-out text-2xl"></i>
      </router-link>
  </div>
</template>

<script setup>
</script>

<style scoped>
.icon-link {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 3rem;
  height: 3rem;
  border-radius: 0.5rem;
  transition: background-color 0.2s;
}

.icon-link:hover {
  background-color: #d1fae5; /* hellgrün für hover */
}

.router-link-active {
  background-color: #6af5bd;
}
</style>
