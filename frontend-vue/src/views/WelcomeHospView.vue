<template>
  <div class="container">
    <!-- Logo oben -->
    <div class="logo-container">
      <img :src="logo" alt="HeartWare Logo" class="logo-image" />
    </div>

    <!-- Sidebar links -->
    <Sidebar />

    <!-- Headerbereich -->
    <div class="header">
      <h1>Welcome Dr. Schmidt!</h1>
      <button class="logout-button" @click="logout">Logout</button>
    </div>

    <!-- Patientensuche -->
    <div class="form">
      <input v-model="showPatient" placeholder="Search for patient" />
    </div>

    <!-- Buttons -->
    <div class="button-group">
      <PrimaryButton label="Show all patients" @click="handleShowAllPatients" variant="primary" />
      <PrimaryButton label="Add patient" @click="addPatient" variant="secondary" />
    </div>
  </div>
</template>

<script>
import PrimaryButton from '../components/PrimaryButton.vue';
import Sidebar from '../components/Sidebar.vue';
import logo from '../assets/HeartWareLogo.png'; // ← KEIN Alias – absolut sicher

export default {
  components: {
    PrimaryButton,
    Sidebar
  },
  data() {
    return {
      showPatient: '',
      logo
    };
  },
  methods: {
    handleShowAllPatients() {
      // Noch zu implementieren
    },
    addPatient() {
      this.$router.push('/add-patient');
    },
    logout() {
      localStorage.removeItem('session');
      this.$router.push('/');
    }
  }
};
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;
}

.logo-container {
  display: flex;
  justify-content: center;
  width: 100%;
  margin-bottom: 20px;
}

.logo-image {
  width: 100px;
  height: auto;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 90%;
  max-width: 600px;
  margin-bottom: 20px;
}

.logout-button {
  padding: 8px 16px;
  background-color: #d32f2f;
  color: white;
  border: none;
  border-radius: 6px;
  font-weight: bold;
  cursor: pointer;
}

h1 {
  font-size: 36px;
  font-weight: bold;
  margin-bottom: 20px;
}

.form {
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 300px;
  margin-bottom: 30px;
}

input {
  padding: 12px;
  font-size: 16px;
  border: none;
  background-color: #e6e0e9;
  border-radius: 6px;
}

.button-group {
  display: flex;
  gap: 20px;
  margin-top: 30px;
}
</style>
