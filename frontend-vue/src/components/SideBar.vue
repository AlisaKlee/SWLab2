<template>
  <div class="sidebar">
    <div class="icon-wrapper">
      <router-link to="/welcome-hospital" class="icon-link" title="Home">
        <i class="pi pi-home text-2xl"></i>
      </router-link>

      <router-link to="/settings" class="icon-link" title="Einstellungen">
        <i class="pi pi-cog text-2xl"></i>
      </router-link>

      <button class="icon-link" @click="logout" title="Logout">
        <i class="pi pi-sign-out text-2xl"></i>
      </button>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router';

const router = useRouter();

const logout = () => {
  localStorage.removeItem('session');
  router.push('/');
};
</script>

<style scoped>
.sidebar {
  width: 64px;
  background-color: #ffffff;
  border-right: 1px solid #ddd;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: center;
}

.icon-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
}

.icon-link {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 3rem;
  height: 3rem;
  border-radius: 0.5rem;
  color: #4b0082;
  transition: background-color 0.2s, transform 0.2s;
  background: none;
  border: none;
}

.icon-link:hover {
  background-color: #eaeaea;
  transform: scale(1.05);
  cursor: pointer;
}

.router-link-active {
  background-color: #d3d3d3;
  font-weight: bold;
  color: #000;
}
</style>
