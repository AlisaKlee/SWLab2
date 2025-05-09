<template>
    <div class="container">
      <!--Titel + Logout-->
      <div class="header">
        <h1>Welcome Team 1!</h1>
        <button class="logout-button" @click="logout">Logout</button>
      </div>
  
      <!--Eingabefeld-->
      <div class="form">
        <input v-model="showPatient" placeholder="Search for patient" @keyup.enter="goToPatientView"/>
      </div>
  
      <!--Buttons-->
      <div class="button-group">
        <PrimaryButton label="Show all patients" @click="handleShowAllPatients" variant="primary" />
        <PrimaryButton label="Add patient" @click="addPatient" variant="secondary" />
      </div>
    </div>
  </template>
  
  <script>
  import PrimaryButton from '../components/PrimaryButton.vue';
  
  export default {
    components: {
      PrimaryButton
    },
    data() {
      return {
        showPatient: ''
      };
    },
    /**methods: {
      goToPatientView() {
      if (this.showPatient.trim() !== '') {
        this.$router.push({
          name: 'PatientView',
          query: { search: this.showPatient.trim() }
        });
      } 
      },
      addPatient() {
        this.$router.push('/add-patient');
      },
      logout() {
        localStorage.removeItem('session'); // Session löschen
        this.$router.push('/'); // zurück zur Login-Seite
      } */
  
      methods: {
        handleSearch() {
          const mockPatients = [
            { id: 1, name: 'Max Mustermann' },
            { id: 2, name: 'Laura Köhler' },
            { id: 3, name: 'Sarah Mayer' },
            { id: 4, name: 'Tom Maier' },
            { id: 5, name: 'Lisa Kurz' },
            { id: 6, name: 'Hildegard Slotta' }
          ];
  
          const match = mockPatients.find(p =>
            p.name.toLowerCase().includes(this.showPatient.toLowerCase())
          );
  
          if (match) {
            this.$router.push(`/patients/${match.id}/view`);
          } else {
            alert('Patient not found.');
          }
        },
        handleShowAllPatients() {
          this.$router.push('/patient-list');
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
  
  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 90%;
    max-width: 600px;
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
    margin-bottom: 40px;
  }
  
  .form {
    display: flex;
    flex-direction: column;
    gap: 20px;
    width: 300px;
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