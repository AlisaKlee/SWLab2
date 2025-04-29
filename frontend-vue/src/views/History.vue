<template>
  <div class="p-4">
    <h2 class="text-2xl font-bold mb-4">Patient History</h2>
    <table class="table-auto w-full border">
      <thead>
        <tr>
          <th>Time</th>
          <th>Oxygen Saturation</th>
          <th>Temperature</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="entry in history" :key="entry.time">
          <td>{{ entry.time }}</td>
          <td>{{ entry.oxygen }}</td>
          <td>{{ entry.temperature }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
const history = [
  { time: '15:04:38', oxygen: '98%', temperature: '40°C' },
  { time: '15:07:46', oxygen: '98%', temperature: '40°C' },
  { time: '15:09:12', oxygen: '97%', temperature: '41°C' },
  { time: '15:11:34', oxygen: '95%', temperature: '41.5°C' },
  { time: '15:23:45', oxygen: '98%', temperature: '40.5°C' },
]
</script>
