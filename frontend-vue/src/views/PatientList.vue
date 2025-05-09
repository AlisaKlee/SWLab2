<template>
  <div class="list-container">
    <!-- Logo oben rechts -->
    <img :src="heartwareLogo" alt="HeartWare Logo" class="logo-top-right" />

    <!-- Titel -->
    <h2 class="title">Patient List</h2>

    <!-- Tabelle -->
    <div class="table-wrapper">
      <table class="patient-table">
        <thead>
          <tr>
            <th>Patient Name</th>
            <th>Treating</th>
            <th>Description</th>
            <th>Urgency</th>
            <th>Room</th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="patient in patients"
            :key="patient.name"
            @click="goToHistory(patient)"
            class="clickable-row"
          >
            <td>{{ patient.name }}</td>
            <td>{{ patient.doctor }}</td>
            <td>{{ patient.description }}</td>
            <td>
              <span class="urgency-badge" :class="urgencyColor(patient.urgency)"></span>
              {{ patient.urgency }}
            </td>
            <td>{{ patient.room }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router';
import heartwareLogo from '../assets/HeartWareLogo.png';

const router = useRouter();

const patients = [
  { name: 'Max Mustermann', doctor: 'Dr. Schmidt', description: 'Severe trauma', urgency: 'Immediate', room: 'A01' },
  { name: 'Laura Köhler', doctor: 'Dr. Haug', description: 'Head injury', urgency: 'Very Urgent', room: 'B02' },
  { name: 'Sarah Mayer', doctor: 'Dr. Schmidt', description: 'Arm fracture', urgency: 'Urgent', room: 'C05' },
  { name: 'Tom Maier', doctor: 'Dr. Torres', description: 'Flu symptoms', urgency: 'Normal', room: 'D10' },
  { name: 'Lisa Kurz', doctor: 'Dr. Walter', description: 'Mild discomfort', urgency: 'Non Urgent', room: 'E12' },
  { name: 'Hildegard Slotta', doctor: 'Dr. Torres', description: 'Death due to age', urgency: 'Passed Away', room: '—' }
];

const urgencyColor = (level) => {
  switch (level) {
    case 'Immediate':
      return 'triage-red';
    case 'Very Urgent':
      return 'triage-orange';
    case 'Urgent':
      return 'triage-yellow';
    case 'Normal':
      return 'triage-green';
    case 'Non Urgent':
      return 'triage-grey';
    case 'Passed Away':
      return 'triage-black';
    default:
      return '';
  }
};

const goToHistory = (patient) => {
  router.push('/history');
};
</script>

<style scoped>
.list-container {
  position: relative;
  padding: 2rem 3rem;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.logo-top-right {
  position: absolute;
  top: 16px;
  right: 16px;
  width: 100px;
  height: auto;
  z-index: 10;
}

.title {
  font-size: 28px;
  font-weight: bold;
  margin-bottom: 2rem;
}

.table-wrapper {
  max-width: 900px;
  width: 100%;
  overflow-x: auto;
}

.patient-table {
  width: 100%;
  border-collapse: collapse;
  cursor: pointer;
}

/* Nur horizontale Linien */
th,
td {
  border: none;
  border-bottom: 1px solid #ccc;
  padding: 12px 16px;
  text-align: left;
}

th {
  border-bottom: 2px solid #999;
  background-color: #f3f3f3;
}

.clickable-row:hover {
  background-color: #f0f8ff;
}

/* Farbpunkte */
.urgency-badge {
  display: inline-block;
  width: 12px;
  height: 12px;
  border-radius: 50%;
  margin-right: 8px;
  vertical-align: middle;
}

/* Triage-Farben */
.triage-red {
  background-color: #e53935;
}
.triage-orange {
  background-color: #fb8c00;
}
.triage-yellow {
  background-color: #fdd835;
}
.triage-green {
  background-color: #43a047;
}
.triage-grey {
  background-color: #bdbdbd;
}
.triage-black {
  background-color: #212121;
}
</style>
