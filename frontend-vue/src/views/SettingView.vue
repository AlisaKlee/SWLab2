<template>
  <div class="settings-view">
    <h2>Settings</h2>

    <section>
      <h3>Change Password</h3>
      <input type="password" v-model="oldPassword" placeholder="Old password" />
      <input type="password" v-model="newPassword" placeholder="New password" />
      <button @click="changePassword">Change</button>
      <button @click="cancelPasswordChange">Cancel</button>
    </section>

    <section>
      <h3>Device Settings</h3>
      <p><strong>Device name:</strong> Raspberry Pi (1)</p>
      <p><strong>Connection:</strong> Stable</p>
      <p><strong>Timestamp:</strong> {{ currentTime }}</p>
    </section>

    <section>
      <h3>Change Language</h3>
      <select v-model="language">
        <option value="en">English</option>
        <option value="de">Deutsch</option>
      </select>
    </section>

    <button @click="logout" class="logout-button">Logout</button>
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

const logout = () => {
  localStorage.removeItem('session');
  router.push('/');
};

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
  font-family: Arial, sans-serif;
}

h2 {
  text-align: center;
}

section {
  margin-bottom: 2rem;
}

input,
select {
  display: block;
  margin: 0.5rem 0;
  padding: 0.5rem;
  width: 100%;
  box-sizing: border-box;
}

button {
  padding: 0.5rem 1rem;
  margin-right: 0.5rem;
  cursor: pointer;
}

.logout-button {
  background-color: #d9534f;
  color: white;
  border: none;
}
</style>
