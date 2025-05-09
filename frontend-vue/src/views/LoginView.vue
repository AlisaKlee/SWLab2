<template>
  <div class="container">
    <!-- Logo oben rechts, aber nicht in der Ecke "verloren" -->
    <img src="../assets/HeartWareLogo.png" alt="HeartWare Logo" class="logo-top-right" />

    <!-- Titel -->
    <h1>HeartWare</h1>

    <!-- Loginformular -->
    <div class="form">
      <input v-model="username" placeholder="Username" />
      <input v-model="password" type="password" placeholder="Password" />
    </div>

    <!-- Buttons -->
    <div class="button-group">
      <PrimaryButton label="Login" @click="handleLogin" variant="primary" />
      <PrimaryButton label="Cancel" @click="handleCancel" variant="secondary" />
    </div>
  </div>
</template>

<script>
import PrimaryButton from '../components/PrimaryButton.vue';

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

  methods: {
    handleLogin() {
      if (this.username == "Doctor" && this.password == "Doctor") {
        console.log("Login as a doctor was succesful.");
        localStorage.setItem("session", "true");
        localStorage.setItem("role", "Doctor");
        this.$router.push("/welcomeDoctorView");
      }
      else if (this.username == "Paramedic" && this.password == "Paramedic") {
        console.log("Login as a paramedic was succesful.");
        localStorage.setItem("session", "true");
        localStorage.setItem("role", "Paramedic");
        this.$router.push("/welcomeParamedicView");
      }
      else {
        alert("Invalid username or password.");
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

.logo-top-right {
  position: absolute;
  top: 40px;
  right: 60px;
  width: 180px; 
  height: auto;
  z-index: 10;
  opacity: 0.95;
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
/**
.button-group {
  margin-top: 1.5rem;
  display: flex;
  gap: 1rem;
  justify-content: center;
}*/
.button-group {
  margin-top: 1.5rem;
  display: flex;
  flex-direction: column; /* Buttons untereinander anordnen */
  gap: 0.75rem; /* Kleinerer Abstand zwischen den Buttons */
  width: 300px; /* Breite an das Formular anpassen */
}
</style>
