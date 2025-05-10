<template>
  <div class="main-content">
    <Sidebar />
    <img src="../assets/HeartWareLogo.png" alt="HeartWare Logo" class="logo" />

    <div class="content">
      <h1 class="title">Welcome Team 1!</h1>

      <div class="form">
        <input v-model="search" placeholder="Search for patient" @keyup.enter="handleSearch" />
      </div>

      <div class="button-group">
        <PrimaryButton label="Add patient" @click="addPatient" variant="secondary" />
      </div>
    </div>
  </div>
</template>

<script>
import Sidebar from '../components/Sidebar.vue';
import PrimaryButton from '../components/PrimaryButton.vue';

export default {
  name: 'WelcomeParamedicView',
  components: {
    Sidebar,
    PrimaryButton
  },
  data() {
    return {
      search: ''
    };
  },
  methods: {
    handleSearch() {
      const mockPatients = [
        { id: 3, name: 'Tom Maier' },
        { id: 4, name: 'Lisa Kurz' }
      ];
      const match = mockPatients.find(p =>
        p.name.toLowerCase().includes(this.search.toLowerCase())
      );
      if (match) {
        this.$router.push(`/patients/${match.id}`);
      } else {
        alert('Patient nicht gefunden.');
      }
    },
    showAllPatients() {
      this.$router.push('/patient-list');
    },
    addPatient() {
      this.$router.push('/add-patient');
    }
  }
};
</script>

<style scoped>
.main-content {
  display: flex;
  background-color: #fafafa;
  min-height: 100vh;
  position: relative;
}

.logo {
  position: absolute;
  top: 1rem;
  right: 2rem;
  width: 150px;
  opacity: 0.95;
}

.content {
  margin-left: 64px;
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem;
}

.title {
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 2rem;
}

.form {
  margin-bottom: 1.5rem;
  width: 300px;
}

input {
  width: 100%;
  padding: 12px;
  border-radius: 6px;
  border: 1px solid #ccc;
  font-size: 16px;
}

.button-group {
  display: flex;
  gap: 1rem;
}
</style>

