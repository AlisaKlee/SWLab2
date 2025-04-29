<template>
    <div class="container">
      //Titel
      <h1>HeartWare</h1>
  
      //Login 
      <div class="form">
        <input v-model="username" placeholder="Username" />
        <input v-model="password" type="password" placeholder="Password" />
      </div>
  
      //Button Gruppe
      <div class="button-group">
        <PrimaryButton label="Login" @click="handleLogin" variant="primary" />
        <PrimaryButton label="Cancel" @click="handleCancel" variant="secondary" />
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
        username: '',
        password: ''
      };
    },
    methods: {
      handleLogin() {
        console.log('Login:', this.username, this.password);
        alert('Logged in!');
        this.$router.push('/welcome-hospital');      //ToDo: Replace welcome with welcomeRtw/ welcomeHops
      },
      handleCancel() {
        console.log('Cancelled');
        alert('Cancelled.');
        this.username = '';
        this.password = '';
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
  