<template>
    <div class="container">
      <!--Title-->
      <h1>Add Patient</h1>
  
      <!--Eingabefeld-->
      <div class="form">
        <input v-model="firstname" placeholder="Firstname" />
        <input v-model="lastname" placeholder="Lastname" />
        <input v-model="dateOfBirth" placeholder="Date of birth" />

        <input v-model="preExistingCondition" placeholder="Pre existing condition" />
        <input v-model="medication" placeholder="Medication" />
      </div>

      <!-- Dropdown Gender -->
    <section class="dropdown-section">
      <select v-model="gender" class="input-field">
        <option disabled value="">Gender</option>
        <option value="male">Male</option>
        <option value="female">Female</option>
        <option value="other">Other</option>
      </select>
    </section>

      <!--Buttons-->
      <div class="button-group">
        <PrimaryButton label="Add" @click="handleAdd" variant="primary" />
        <PrimaryButton label="Cancel" @click="handleCancel" variant="secondary" />
      </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import axios from 'axios';
import PrimaryButton from '../components/PrimaryButton.vue';

const firstname = ref('');
const lastname = ref('');
const dateOfBirth = ref('');
const gender = ref('');
const preExistingCondition = ref('');
const medication = ref('');

const handleAdd = async () => {
  const newPatient = {
    firstname: firstname.value,
    lastname: lastname.value,
    dateOfBirth: dateOfBirth.value,
    gender: gender.value,
    preExistingCondition: preExistingCondition.value,
    medication: medication.value
  };

  try {
    const response = await axios.post('http://localhost:8080/api/patients', newPatient);
    console.log('Added to Server:', response.data);
    alert('Patient was added successfully!');

    firstname.value = '';
    lastname.value = '';
    dateOfBirth.value = '';
    gender.value = '';
    preExistingCondition.value = '';
    medication.value = '';
  } catch (error) {
    console.error('Error while trying to add patient', error);
    alert('Error trying to add patient!');
  }
};

const handleCancel = () => {
  console.log('Cancelled');
  alert('Cancelled.');
  firstname.value = '';
  lastname.value = '';
  dateOfBirth.value = '';
  gender.value = '';
  preExistingCondition.value = '';
  medication.value = '';
};
</script>


<style scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;
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

.input-field {
  padding: 12px;
  font-size: 16px;
  width: 100%;
  border: 1px solid #ccc;
  background-color: #e6e0e9;
  border-radius: 8px;
  font-family: inherit;
  box-sizing: border-box;
}

.section-title {
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 1rem;
}

.dropdown-section {
  width: 300px;
  margin-top: 20px;
  font-family: system-ui, Avenir, Helvetica, Arial, sans-serif;
}

.button-group {
  display: flex;
  gap: 20px;
  margin-top: 30px;
}
</style>
