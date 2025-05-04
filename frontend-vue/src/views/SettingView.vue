<template>
  <div class="p-4">
    <img :src="heartwareLogo" alt="Heartware Logo" class="mb-4 w-32" />
    <h2 class="text-2xl font-bold mb-4">Settings</h2>
    <form class="space-y-4">
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
import DeviceService from '@/services/DeviceService'
import heartwareLogo from '@/assets/HeartWareLogo.png'

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
  // Hier echte Logout-Logik einbauen
  console.log('Logged out')
}

onMounted(() => {
  fetchDevice()
})
</script>
