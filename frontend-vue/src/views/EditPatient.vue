<template>
      <!-- Main Content -->
      <div class="main-content">
        <h1>Edit patient data</h1>
  
        <div class="form-group">
          <label>Firstname:</label>
          <div class="input-wrapper">
            <input v-model="form.firstname" type="text" />
            <span class="clear-icon" @click="form.firstname = ''">✖</span>
          </div>
  
          <label>Lastname:</label>
          <div class="input-wrapper">
            <input v-model="form.lastname" type="text" />
            <span class="clear-icon" @click="form.lastname = ''">✖</span>
          </div>
  
          <label>Date of birth:</label>
          <div class="input-wrapper">
            <input v-model="form.dob" type="text" />
            <span class="clear-icon" @click="form.dob = ''">✖</span>
          </div>
  
          <label>Gender:</label>
          <select v-model="form.gender">
            <option>Male</option>
            <option>Female</option>
            <option>Other</option>
          </select>
  
          <label>Pre existing conditions:</label>
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
          <button class="save-button">Save changes</button>
          <button class="cancel-button">Cancel</button>
        </div>
      </div>
  
      <!-- Logo rechts -->
      <img src="@/assets/HeartWareLogo.png" class="logo" />
    <!--</div>-->
  </template>
  
  <script setup>
  import { reactive } from 'vue';
  
  const form = reactive({
    firstname: 'Maximilian',
    lastname: 'Mustermann',
    dob: '01/01/2005',
    gender: 'Male',
    conditions: 'None',
    medication: 'None'
  });
  </script>
  
  <style scoped>
  .edit-container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-family: system-ui, Avenir, Helvetica, Arial, sans-serif;
    padding: 2rem;
    height: 100vh;
    box-sizing: border-box;
  }
  
  .sidebar {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    font-size: 24px;
  }
  
  .icon {
    cursor: pointer;
  }
  
  .main-content {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 1.5rem;
    margin: auto;
    max-width: 400px;
    width: 100%;
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
  
  .logo {
    position: absolute;
    top: 2rem;
    right: 2rem;
    height: 60px;
  }
  </style>