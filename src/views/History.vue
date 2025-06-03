<template>
  <div class="history-container">
    <h1 class="title">{{ $t('patientHistory') }}</h1>

    <!-- Scrollbarer Vitaldaten-Bereich -->
    <div class="table-wrapper">
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
    </div>

    <!-- EKG-Kurve -->
    <div class="ekg-section">
      <h2 class="ekg-title">{{ $t('ekgCurve') }}</h2>
      <div class="ekg-placeholder">
        [{{ $t('ekgPlaceholder') }}]
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
  { time: '15:23:45', oxygen: '98%', temperature: '40.5°C' },
  { time: '15:24:12', oxygen: '96%', temperature: '40.2°C' },
  { time: '15:25:37', oxygen: '97%', temperature: '39.9°C' },
  { time: '15:26:49', oxygen: '95%', temperature: '40.1°C' },
  { time: '15:28:03', oxygen: '98%', temperature: '40°C' },
  { time: '15:29:25', oxygen: '94%', temperature: '40.3°C' },
  { time: '15:30:10', oxygen: '96%', temperature: '39.8°C' },
  { time: '15:31:54', oxygen: '97%', temperature: '40.0°C' }
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

.table-wrapper {
  max-height: 300px;
  overflow-y: auto;
  border: 1px solid #ccc;
  border-radius: 8px;
}

.patient-table {
  width: 100%;
  border-collapse: collapse;
}

.patient-table th,
.patient-table td {
  padding: 10px;
  text-align: left;
  border-bottom: 1px solid #ccc;
}

.patient-table th {
  background-color: #f3f3f3;
  position: sticky;
  top: 0;
  z-index: 1;
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