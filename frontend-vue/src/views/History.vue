<template>
  <div class="history-container">
    <h1 class="title">{{ $t('patientHistory') }}</h1>

    <!-- Vitaldaten -->
    <table class="patient-table">
      <thead>
        <tr>
          <th>{{ $t('time') }}</th>
          <th>{{ $t('oxygen') }}</th>
          <th>{{ $t('temperature') }}</th>
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

    <!-- EKG-Kurve -->
    <div class="ekg-section">
      <h2 class="ekg-title">EKG-Kurve</h2>
      <div class="ekg-placeholder">
        [Platzhalter für EKG-Kurve]
      </div>
    </div>
  </div>
</template>

<script setup>
const history = [
  { time: '15:04:38', oxygen: '98%', temperature: '40°C' },
  { time: '15:07:46', oxygen: '98%', temperature: '40°C' },
  { time: '15:09:12', oxygen: '97%', temperature: '41°C' },
  { time: '15:11:34', oxygen: '95%', temperature: '41.5°C' },
  { time: '15:23:45', oxygen: '98%', temperature: '40.5°C' }
];
</script>

<style scoped>
.history-container {
  padding: 2rem;
  max-width: 800px;
  margin: auto;
  font-family: system-ui, Avenir, Helvetica, Arial, sans-serif;
}

.title {
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 2rem;
  text-align: center;
}

.patient-table {
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 2rem;
}

.patient-table th,
.patient-table td {
  padding: 10px;
  text-align: left;
  border-bottom: 1px solid #ccc;
}

.patient-table th {
  background-color: #f3f3f3;
}

.ekg-section {
  margin-top: 2rem;
}

.ekg-title {
  font-size: 1.25rem;
  font-weight: bold;
  margin-bottom: 1rem;
  text-align: center;
}

.ekg-placeholder {
  height: 250px;
  background-color: #f6f6f6;
  border: 2px solid black;
  border-radius: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-style: italic;
  color: #333;
}
</style>
