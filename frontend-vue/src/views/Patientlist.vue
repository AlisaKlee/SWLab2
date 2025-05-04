<template>
  <div class="p-4">
    <h2 class="text-2xl font-bold mb-4">Patient List</h2>
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
const patients = [
  { name: 'Max Mustermann', doctor: 'Dr. Schmidt', description: 'Tension pneumothorax', urgency: 'High', eta: '12 min' },
  { name: 'Laura Köhler', doctor: 'Dr. Haug', description: 'Laceration', urgency: 'Medium', eta: '10 min' },
  { name: 'Sarah Mayer', doctor: 'Dr. Schmidt', description: 'Arm fracture', urgency: 'Low', eta: '9 min' },
  { name: 'Hildegard Slotta', doctor: 'Dr. Torres', description: 'Death due to old age', urgency: 'None', eta: '5 min' },
]
</script>
