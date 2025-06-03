<template>
  <div class="sidebar">
    <div class="icon-wrapper">
      <button
        v-if="!hideBackButton"
        class="icon-link"
        @click="goBack"
        :title="$t('back')"
      >
        <i class="pi pi-arrow-left text-2xl"></i>
      </button>

      <button class="icon-link" @click="goHome" :title="$t('home')">
        <i class="pi pi-home text-2xl"></i>
      </button>

      <router-link to="/settings" class="goSettings" :title="$t('settings')">
        <i class="pi pi-cog text-2xl"></i>
      </router-link>

      <button class="icon-link" @click="logout" :title="$t('logout')">
        <i class="pi pi-sign-out text-2xl"></i>
      </button>
    </div>
  </div>
</template>

<script setup>
import { useRouter, useRoute } from 'vue-router';
import { computed } from 'vue';

const router = useRouter();
const route = useRoute();

// Liste der Pfade, bei denen kein Zurück-Button gezeigt werden soll
const hideBackButton = computed(() =>
  ['/', '/login', '/welcomeDoctorView', '/welcomeParamedicView'].includes(route.path)
);

const goBack = () => {
  router.back();
};

const goHome = () => {
  const role = localStorage.getItem('role');
  if (role === 'Doctor') {
    router.push('/welcomeDoctorView');
  } else if (role === 'Paramedic') {
    router.push('/welcomeParamedicView');
  } else {
    alert('Keine gültige Rolle – bitte neu einloggen.');
    router.push('/');
  }
};

const logout = () => {
  localStorage.removeItem('session');
  localStorage.removeItem('role');
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
  margin-top: 1rem;
}

.icon-link {
  width: 3rem;
  height: 3rem;
  border-radius: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #4b0082;
  background: none;
  border: none;
  transition: background-color 0.2s, transform 0.2s;
}

.icon-link:hover {
  background-color: #f0f0f0;
  transform: scale(1.05);
}
</style>
