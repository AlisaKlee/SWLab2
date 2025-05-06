<template>
  <div class="p-4 logo-container">
    <!-- Logo oben rechts -->
    <img :src="heartwareLogo" alt="HeartWare Logo" class="logo-top-right" />

    <!-- Überschrift -->
    <h2 class="text-2xl font-bold mb-4">Patient List</h2>

    <!-- Patiententabelle -->
    <table class="table-auto w-full border">
      <thead>
        <tr>
          <th>Patient Name</th>
          <th>Treating</th>
          <th>Description</th>
          <th>Urgency</th>
          <th>ETA</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="patient in patients" :key="patient.name">
          <td>{{ patient.name }}</td>
          <td>{{ patient.doctor }}</td>
          <td>{{ patient.description }}</td>
          <td>{{ patient.urgency }}</td>
          <td>{{ patient.eta }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
// Verwende relativen Pfad – funktioniert unabhängig vom Alias
import heartwareLogo from '../assets/HeartWareLogo.png'

const patients = [
  { name: 'Max Mustermann', doctor: 'Dr. Schmidt', description: 'Tension pneumothorax', urgency: 'High', eta: '12 min' },
  { name: 'Laura Köhler', doctor: 'Dr. Haug', description: 'Laceration', urgency: 'Medium', eta: '10 min' },
  { name: 'Sarah Mayer', doctor: 'Dr. Schmidt', description: 'Arm fracture', urgency: 'Low', eta: '9 min' },
  { name: 'Hildegard Slotta', doctor: 'Dr. Torres', description: 'Death due to old age', urgency: 'None', eta: '5 min' },
]
</script>

<style scoped>
.logo-container {
  position: relative;
  min-height: 120px;
}

.logo-top-right {
  position: absolute;
  top: 16px;
  right: 16px;
  width: 60px;
  height: auto;
  z-index: 10;
}

.table-auto {
  border-collapse: collapse;
}

th,
td {
  border: 1px solid #ccc;
  padding: 8px 12px;
  text-align: left;
}

th {
  background: #f3f3f3;
}
</style>
