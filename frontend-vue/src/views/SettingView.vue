<template>
  <div class="settings-view">
    <h2 class>Settings</h2>

    <section>
      <h3 class>Change Password</h3>
        <input
          type="password"
          v-model="oldPassword"
          placeholder="Old password"
          class="input-field"
        />
        <input
          type="password"
          v-model="newPassword"
          placeholder="New password"
          class="input-field"
        />
        <div class="button-group">
          <button @click="changePassword" class="btn btn-primary">Change</button>
          <button @click="cancelPasswordChange" class="btn btn-secondary">Cancel</button>          
        </div>
    </section>
    
    <section>
      <h3 class="section-title">Device Settings</h3>
      <button @click="goToDevice" class="btn btn-primary">Open Device Settings</button>
    </section>

    <section>
      <h3 class="section-title">Change Language</h3>
      <select v-model="language" class="input-field">
        <option value="en">English</option>
        <option value="de">Deutsch</option>
      </select>
    </section>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';

const oldPassword = ref('');
const newPassword = ref('');
const language = ref('en');
const currentTime = ref('');
const router = useRouter();

const changePassword = () => {
  alert('Password changed (Platzhalter)');
};

const cancelPasswordChange = () => {
  oldPassword.value = '';
  newPassword.value = '';
};

const goToDevice = () => {
  router.push('/device');
}

onMounted(() => {
  const now = new Date();
  currentTime.value = now.toLocaleString();
});
</script>

<style scoped>
.settings-view {
  padding: 2rem;
  max-width: 600px;
  margin: auto;
  font-family: system-ui, Avenir, Helvetica, Arial, sans-serif;
}

.main-title {
  text-align: center;
  font-size: 2.5rem;
  font-weight: bold;
  margin-bottom: 2rem;
}

.section-title {
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 1rem;
}

section {
  margin-bottom: 2rem;
}

.input-field {
  display: block;
  margin-bottom: 1rem;
  padding: 10px;
  width: 100%;
  border: 1px solid #ccc;
  border-radius: 8px;
  background-color: #eae2f8;
  font-family: inherit;
  box-sizing: border-box;
}

.button-group {
  display: flex;
  gap: 1rem;
  margin-top: 0.5rem;
}

.btn {
  padding: 0.6rem 1.2rem;
  font-size: 1rem;
  border-radius: 8px;
  border: none;
  cursor: pointer;
  font-family: inherit;
}

.btn-primary {
  background-color: #000;
  color: #fff;
}

.btn-secondary {
  background-color: #e0e0e0;
  color: #000;
}

.logout-button {
  background-color: #d9534f;
  color: white;
  margin-top: 2rem;
}
</style>
