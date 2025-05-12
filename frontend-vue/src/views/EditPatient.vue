<template>
  <div class="main-content">
    <h1>Edit patient data</h1>

    <div class="form-group">
      <label>First name:</label>
      <div class="input-wrapper">
        <input v-model="form.firstname" type="text" />
        <span class="clear-icon" @click="form.firstname = ''">✖</span>
      </div>

      <label>Last name:</label>
      <div class="input-wrapper">
        <input v-model="form.lastname" type="text" />
        <span class="clear-icon" @click="form.lastname = ''">✖</span>
      </div>

      <label>Date of birth:</label>
      <div class="input-wrapper">
        <input
          v-model="form.dob"
          type="date"
          :max="maxDate"
          title="Select a valid birth date"
        />
        <span class="clear-icon" @click="form.dob = ''">✖</span>
      </div>

      <label>Gender:</label>
      <select v-model="form.gender">
        <option>Male</option>
        <option>Female</option>
        <option>Other</option>
      </select>

      <label>Pre-existing conditions:</label>
      <div class="input-wrapper">
        <input v-model="form.conditions" type="text" />
        <span class="clear-icon" @click="form.conditions = ''">✖</span>
      </div>

      <label>Medication:</label>
      <div class="input-wrapper">
        <input v-model="form.medication" type="text" />
        <span class="clear-icon" @click="form.medication = ''">✖</span>
      </div>
    </div>

    <div class="button-group">
      <button class="save-button" @click="handleSave">Save changes</button>
      <button class="cancel-button" @click="handleCancel">Cancel</button>
    </div>
  </div>
</template>

<script setup>
import { reactive, toRaw, computed } from 'vue';
import { useRoute } from 'vue-router';
import router from '../router';

const route = useRoute();

const initialData = {
  firstname: route.query.firstname || '',
  lastname: route.query.lastname || '',
  dob: route.query.dob || '',
  gender: route.query.gender || '',
  conditions: route.query.conditions || '',
  medication: route.query.medication || ''
};

const form = reactive({ ...initialData });

const maxDate = computed(() => new Date().toISOString().split('T')[0]);

function handleSave() {
  if (typeof patients !== 'undefined' && patients[patientIndex]) {
    patients[patientIndex].name = `Name: ${form.firstname} ${form.lastname}`;
    patients[patientIndex].dob = form.dob;
    patients[patientIndex].gender = form.gender;
    patients[patientIndex].conditions = `Pre-existing conditions: ${form.conditions}`;
    patients[patientIndex].medication = `Medication: ${form.medication}`;
    alert('Patient data was saved.');
  } else {
    alert('Patient not found.');
  }
}

function handleCancel() {
  Object.assign(form, toRaw(initialData));
}
</script>

<style scoped>
.main-content {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1.5rem;
  margin: auto;
  max-width: 400px;
  width: 100%;
  padding: 2rem;
  font-family: system-ui, Avenir, Helvetica, Arial, sans-serif;
}

h1 {
  font-size: 32px;
  font-weight: bold;
  margin-bottom: 1.5rem;
}

.form-group {
  width: 100%;
}

label {
  display: block;
  font-size: 14px;
  margin-bottom: 4px;
  margin-top: 16px;
}

.input-wrapper {
  position: relative;
  display: flex;
  align-items: center;
}

.input-wrapper input {
  width: 100%;
  padding: 10px 36px 10px 12px;
  border-radius: 6px;
  background-color: #e6e0e9;
  border: none;
  font-size: 16px;
}

input[type="date"] {
  font-family: inherit;
}

.clear-icon {
  position: absolute;
  right: 12px;
  cursor: pointer;
  font-size: 16px;
  color: #444;
}

select {
  width: 100%;
  padding: 10px 12px;
  border-radius: 6px;
  background-color: #e6e0e9;
  border: none;
  font-size: 16px;
}

.button-group {
  display: flex;
  gap: 20px;
  margin-top: 2rem;
}

.save-button {
  background-color: #000;
  color: white;
  padding: 10px 20px;
  font-weight: 500;
  border: none;
  border-radius: 6px;
  font-size: 16px;
  cursor: pointer;
}

.cancel-button {
  background-color: #e6e0e9;
  padding: 10px 20px;
  font-weight: 500;
  border: none;
  border-radius: 6px;
  font-size: 16px;
  cursor: pointer;
}
</style>
