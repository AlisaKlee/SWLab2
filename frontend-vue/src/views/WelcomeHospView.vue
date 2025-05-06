<template>
  <div class="main-content">
    <!-- Logo oben rechts -->
    <div class="logo-container">
      <img :src="logo" alt="HeartWare Logo" class="logo-image" />
    </div>

    <!-- Inhalt mittig zur Sidebar-Höhe -->
    <div class="content">
      <div class="header">
        <h1>Welcome Dr. Schmidt!</h1>
        <button class="logout-button" @click="logout">Logout</button>
      </div>

      <div class="form">
        <input v-model="showPatient" placeholder="Search for patient" />
      </div>

      <div class="button-group">
        <PrimaryButton label="Show all patients" @click="handleShowAllPatients" variant="primary" />
        <PrimaryButton label="Add patient" @click="addPatient" variant="secondary" />
      </div>
    </div>
  </div>
</template>

<script>
import PrimaryButton from '../components/PrimaryButton.vue';
import logo from '../assets/HeartWareLogo.png';

export default {
  components: {
    PrimaryButton
  },
  data() {
    return {
      showPatient: '',
      logo
    };
  },
  methods: {
    handleShowAllPatients() {
      // Platzhalter
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
.main-content {
  position: relative;
  background-color: #fcfcfc;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  padding-left: 80px; /* Platz für Sidebar */
}

/* Logo oben rechts – größer */
.logo-container {
  position: absolute;
  top: 1rem;
  right: 2rem;
}

.logo-image {
  width: 150px;
  height: auto;
}

/* Inhalt auf Höhe der Sidebar-Icons */
.content {
  margin-top: 25vh; /* ⬅️ orientiert sich an Sidebar-Mitte */
  display: flex;
  flex-direction: column;
  align-items: center;
}

/* Titel + Logout nebeneinander */
.header {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  margin-bottom: 2rem;
}

h1 {
  font-size: 36px;
  font-weight: bold;
  margin: 0;
}

/* Logout-Button */
.logout-button {
  padding: 8px 16px;
  background-color: #d32f2f;
  color: white;
  border: none;
  border-radius: 6px;
  font-weight: bold;
  cursor: pointer;
}

/* Eingabefeld */
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

/* Button-Gruppe */
.button-group {
  display: flex;
  gap: 20px;
  margin-top: 30px;
}
</style>
