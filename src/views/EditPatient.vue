<template>
  <div class="edit-wrapper">
    <img src="../assets/HeartWareLogo.png" alt="HeartWare Logo" class="logo-top-right" />
  </div>

  <div class="main-content">
    <h1>{{ $t('editPatientData') }}</h1>

    <div class="form-group">
      <label>{{ $t('firstName') }}</label>
      <div class="input-wrapper">
        <input v-model="form.firstname" type="text" />
        <span class="clear-icon" @click="form.firstname = ''">✖</span>
      </div>

      <label>{{ $t('lastName') }}</label>
      <div class="input-wrapper">
        <input v-model="form.lastname" type="text" />
        <span class="clear-icon" @click="form.lastname = ''">✖</span>
      </div>

      <label>{{ $t('dateOfBirth') }}</label>
      <div class="input-wrapper">
        <input v-model="form.dob" type="date" :max="maxDate" />
        <span class="clear-icon" @click="form.dob = ''">✖</span>
      </div>

      <label>{{ $t('gender') }}</label>
      <select v-model="form.gender">
        <option>{{ $t('genderMale') }}</option>
        <option>{{ $t('genderFemale') }}</option>
        <option>{{ $t('genderOther') }}</option>
      </select>

      <label>{{ $t('preExistingCondition') }}</label>
      <div class="input-wrapper">
        <input v-model="form.conditions" type="text" />
        <span class="clear-icon" @click="form.conditions = ''">✖</span>
      </div>

      <label>{{ $t('medication') }}</label>
      <div class="input-wrapper">
        <input v-model="form.medication" type="text" />
        <span class="clear-icon" @click="form.medication = ''">✖</span>
      </div>
    </div>

    <div class="button-group">
      <button class="save-button" @click="handleSave">{{ $t('saveChanges') }}</button>
      <button class="cancel-button" @click="handleCancel">{{ $t('cancel') }}</button>
    </div>
  </div>
</template>

<script setup>
import { reactive, toRaw, computed } from 'vue';
import { useRoute } from 'vue-router';

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
  alert('Saved (mock only)');
}

function handleCancel() {
  Object.assign(form, toRaw(initialData));
}
</script>

<style scoped>
.logo-top-right {
  position: absolute;
  top: 20px;
  right: 100px;
  width: 120px;
  height: auto;
  z-index: 10;
  opacity: 0.95;
}

.main-content {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1.5rem;
  margin: auto;
  max-width: 400px;
  width: 100%;
  padding-top: 120px;
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
