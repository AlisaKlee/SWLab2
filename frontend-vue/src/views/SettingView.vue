<template>
  <div class="p-4">
    <h2 class="text-2xl font-bold mb-4">Settings</h2>
    <form class="space-y-4" @submit.prevent>
      <div>
        <label>Old password:</label>
        <input type="password" v-model="oldPassword" class="input" />
      </div>
      <div>
        <label>New password:</label>
        <input type="password" v-model="newPassword" class="input" />
      </div>
      <div>
        <label>Change language:</label>
        <select v-model="language" class="input">
          <option value="en">English</option>
          <option value="de">Deutsch</option>
        </select>
      </div>
      <div>
        <label>Device:</label>
        <p>{{ device.deviceName }}</p>
        <p>Status: {{ device.connectionStatus }}</p>
        <p>Last updated: {{ device.timestamp }}</p>
      </div>
      <button type="button" class="btn" @click="logout">Logout</button>
    </form>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import DeviceService from '@/services/DeviceService.js'

const oldPassword = ref('')
const newPassword = ref('')
const language = ref('en')

const device = ref({
  deviceName: '',
  connectionStatus: '',
  timestamp: ''
})

const fetchDevice = async () => {
  const result = await DeviceService.getDeviceStatus()
  device.value = result
}

const logout = () => {
  localStorage.removeItem('session');
  window.location.href = '/';
}

onMounted(() => {
  fetchDevice()
})
</script>

<style scoped>
.input {
  padding: 12px;
  font-size: 16px;
  border: none;
  background-color: #e6e0e9;
  border-radius: 6px;
  width: 100%;
  margin-bottom: 10px;
}
.btn {
  padding: 10px 24px;
  background-color:rgb(172, 138, 138);
  color: white;
  border: none;
  border-radius: 6px;
  font-weight: bold;
  cursor: pointer;
}
.btn:hover {
  background-color: #b71c1c;
}
</style>
