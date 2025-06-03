<template>
  <div class="main-content">
    <Sidebar />

    <div class="content">
      <h2 class="title">{{ $t('patientList') }}</h2>

      <div class="table-container">
        <table class="patient-table">
          <thead>
            <tr>
              <th>{{ $t('patientName') }}</th>
              <th>{{ $t('treating') }}</th>
              <th>{{ $t('description') }}</th>
              <th>{{ $t('urgency') }}</th>
              <th>{{ $t('room') }}</th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="(patient, index) in patients"
              :key="index"
              @click="goToPatient(index)"
              class="clickable-row"
            >
              <td>{{ formatName(patient.name) }}</td>
              <td>{{ patient.doctor }}</td>
              <td>{{ $t(patient.description) }}</td>
              <td><UrgencyIndicator :level="patient.urgency" /></td>
              <td @click.stop>
                <select v-model="patient.room" class="room-select">
                  <option v-for="room in rooms" :key="room" :value="room">
                    {{ room }}
                  </option>
                </select>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router';
import { ref } from 'vue';
import PatientService from '../services/PatientService.js';
import UrgencyIndicator from '../components/UrgencyIndicator.vue';
import Sidebar from '../components/Sidebar.vue';

const router = useRouter();
const rooms = ['1', '2', '3', '4', '5', 'D10', '12', '13', '14'];

const patients = ref(PatientService.getAllPatients());

const goToPatient = (index) => {
  router.push(`/patients/${index}`);
};

function formatName(fullName) {
  const parts = fullName.trim().split(' ');
  if (parts.length < 2) return fullName;
  const firstname = parts[0];
  const lastname = parts.slice(1).join(' ');
  return `${lastname}, ${firstname}`;
}
</script>

<style scoped>
.main-content {
  display: flex;
  background-color: #fafafa;
  min-height: 100vh;
}

.content {
  margin-left: 64px;
  flex: 1;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.title {
  font-size: 28px;
  font-weight: bold;
  margin-bottom: 1rem;
}

.table-container {
  width: 100%;
  max-width: 1200px;
  height: 600px;
  overflow-y: auto;
  border: 1px solid #ccc;
  background-color: white;
  border-radius: 8px;
}

.patient-table {
  width: 100%;
  border-collapse: collapse;
}

th, td {
  padding: 12px 16px;
  text-align: left;
  border-bottom: 1px solid #ccc;
}

th {
  background-color: #f3f3f3;
}

.clickable-row:hover {
  background-color: #f0f8ff;
}

.room-select {
  padding: 6px 10px;
  font-size: 14px;
  border-radius: 4px;
  background-color: #f7f7f7;
  border: 1px solid #ccc;
}
</style>