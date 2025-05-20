<template>
  <div class="main-content">
    <Sidebar />

    <div class="content">
      <h1 class="title">{{ $t('welcomeParamedic') }}</h1>

      <div class="form">
        <!-- Dropdown Ambulance -->
        <div class="dropdown">
          <label for="ambulance-select">{{ $t('Please select an ambulance.') }}</label>
          <select v-model="selectedAmbulance" id="ambulance-select">
            <option disabled value="">{{ $t('Ambulance') }}</option>
            <option v-for="n in 5" :key="n" :value="n">Ambulance {{ n }}</option>
          </select>
        </div>

        <p v-if="showError" class="error-message">
          {{ $t('ambulanceRequired') }}
        </p>

        <input
          v-model="search"
          :placeholder="$t('searchPatient')"
          @focus="validateAmbulance"
        />
        <ul v-if="search && filteredPatients.length" class="results-list">
          <li
            v-for="patient in filteredPatients"
            :key="patient.id"
            @click="selectPatient(patient)"
            class="result-item"
          >
            {{ patient.name }}
          </li>
        </ul>
      </div>

      <div class="button-group">
        <PrimaryButton
          :label="$t('addPatient')"
          @click="addPatient"
          variant="secondary"
        />
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
      search: '',
      selectedAmbulance: '',
      showError: false,
      patients: [
        { id: 0, name: 'Max Mustermann' },
        { id: 1, name: 'Laura Köhler' },
        { id: 2, name: 'Sarah Mayer' },
        { id: 3, name: 'Tom Maier' },
        { id: 4, name: 'Lisa Kurz' },
        { id: 5, name: 'Hildegard Slotta' }
      ]
    };
  },
  computed: {
    filteredPatients() {
      if (!this.selectedAmbulance) return [];
      return this.patients.filter(patient =>
        patient.name.toLowerCase().includes(this.search.toLowerCase())
      );
    }
  },
  methods: {
    validateAmbulance() {
      if (!this.selectedAmbulance) {
        this.showError = true;
      }
      else {
        this.showError = false;
      }
    },
    selectPatient(patient) {
      if (!this.selectedAmbulance){
        this.showError = true;
        return;
      }
      else {
        this.$router.push(`/patients/${patient.id}`);
      }
    },
    addPatient() {
      if (!this.selectedAmbulance){
        this.showError = true;
        return;
      }
      else {
        this.showError = false;
        this.$router.push('/add-patient');
      }
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

.content {
  margin-left: 64px;
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  font-family: system-ui, Avenir, Helvetica, Arial, sans-serif;
}

.title {
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 2rem;
}

.form {
  margin-bottom: 0.5rem;
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
  gap: 1rem;
  margin-top: 1rem;
}

.results-list {
  list-style: none;
  margin-top: 10px;
  padding: 0;
  width: 300px;
  border: 1px solid #ccc;
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

.dropdown label {
  margin-bottom: 1rem;
  font-weight: 500;
}

.dropdown {
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
}

.dropdown select {
  padding: 2px;
  font-size: 14px;
  border-radius: 6px;
  border: 1px solid #ccc;
  font-family: system-ui, Avenir, Helvetica, Arial, sans-serif;
}

.error-message {
  color: red;
  font-size: 14px;
  margin-top: 0.5rem;
  margin-bottom: 1rem;
  font-family: system-ui, Avenir, Helvetica, Arial, sans-serif;
}
</style>