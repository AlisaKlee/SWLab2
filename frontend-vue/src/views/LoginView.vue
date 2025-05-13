<template>
  <div class="container">
    <h1>{{ $t('HeartWare') }}</h1>

    <div class="form">
      <input v-model="username" :placeholder="$t('username')" />
      <input v-model="password" type="password" :placeholder="$t('password')" />
    </div>

    <div class="button-group">
      <PrimaryButton :label="$t('login')" @click="handleLogin" variant="primary" />
      <PrimaryButton :label="$t('cancel')" @click="handleCancel" variant="secondary" />
    </div>
  </div>
</template>

<script>
import PrimaryButton from '../components/PrimaryButton.vue';
import { connectWebSocket } from '../services/websocketService.js';

connectWebSocket(); 


export default {
  name: "LoginView",
  components: {
    PrimaryButton
  },
  data() {
    return {
      username: "",
      password: ""
    };
  },
  created() {
    localStorage.removeItem("session");
    localStorage.removeItem("role");
  },
  methods: {
    handleLogin() {
      if (this.username === "Doctor" && this.password === "Doctor") {
        localStorage.setItem("session", "true");
        localStorage.setItem("role", "Doctor");
        this.$router.push("/welcomeDoctorView");
      } else if (this.username === "Paramedic" && this.password === "Paramedic") {
        localStorage.setItem("session", "true");
        localStorage.setItem("role", "Paramedic");
        this.$router.push("/welcomeParamedicView");
      } else {
        alert(this.$t('invalidLogin'));
      }
    },
    handleCancel() {
      this.username = "";
      this.password = "";
    }
  }
};
</script>

<style scoped>
.container {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  padding: 2rem;
  background-color: #f5f8fa;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  overflow: hidden;
}

h1 {
  font-size: 2.5rem;
  margin-bottom: 2rem;
  color: #1a1a1a;
}

.form {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 300px;
}

input {
  padding: 12px;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 8px;
  background-color: white;
  outline: none;
  transition: border-color 0.3s ease;
}

input:focus {
  border-color: #007bff;
}

.button-group {
  margin-top: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  width: 300px;
}
</style>
