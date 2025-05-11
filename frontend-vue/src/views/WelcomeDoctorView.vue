<template>
  <div class="main-content">
    <Sidebar />
    <img src="../assets/HeartWareLogo.png" alt="HeartWare Logo" class="logo" />

    <div class="content">
      <h1 class="title">Welcome Dr. Schmidt!</h1>

      <div class="form">
        <input v-model="search" placeholder="Search for patient" />
        <ul v-if="search && filteredPatients.length" class="results-list">
          <li v-for="patient in filteredPatients" :key="patient.id" @click="selectPatient(patient)" class="result-item">
            {{ patient.name }}
          </li>
        </ul>
      </div>

      <div class="button-group">
        <PrimaryButton label="Show all patients" @click="showAllPatients" variant="primary" />
        <PrimaryButton label="Add patient" @click="addPatient" variant="secondary" />
      </div>
    </div>
  </div>
</template>

<script>
import Sidebar from '../components/Sidebar.vue';
import PrimaryButton from '../components/PrimaryButton.vue';

export default {
  name: 'WelcomeDoctorView',
  components: {
    Sidebar,
    PrimaryButton
  },
  data() {
    return {
      search:'',
      patients: [
        { id: 0, name: 'Max Mustermann' },
        { id: 1, name: 'Laura Köhler' },
        { id: 2, name: 'Sarah Mayer'},
        { id: 3, name: 'Tom Maier'},
        { id: 4, name: 'Lisa Kurz'},
        { id: 5, name: 'Hildegard Slotta'}
      ]
    };
  },
  computed: {
    filteredPatients() {
      return this.patients.filter(patient =>
        patient.name.toLowerCase().includes(this.search.toLowerCase())
      );
    }
  },
  methods: {
    selectPatient(patient){
      this.$router.push(`/patients/${patient.id}`);
    },
    handleSearch() {
      const mockPatients = [
        { id: 0, name: 'Max Mustermann' },
        { id: 1, name: 'Laura Köhler' },
        { id: 2, name: 'Sarah Mayer'},
        { id: 3, name: 'Tom Maier'},
        { id: 4, name: 'Lisa Kurz'},
        { id: 5, name: 'Hildegard Slotta'}
      ];
      const match = mockPatients.find(p =>
        p.name.toLowerCase().includes(this.search.toLowerCase())
      );
      if (match) {
        this.$router.push(`/patients/${match.id}`);
      } else {
        alert('Could not find patient.');
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

.results-list {
  list-style: none;
  margin-top: 10px;
  padding: 0;
  width: 300px;
  border: 1px solid #ccc;
  font-family: system-ui, Avenir, Helvetica, Arial, sans-serif;
  background: white;
  border-radius: 6px;
  max-height: 200px;
  overflow-y: auto;
}

.result-item {
  padding: 10px 12px;
  cursor: pointer;
}

.result-item:hover {
  background-color: #f0f0f0;
}
</style>
