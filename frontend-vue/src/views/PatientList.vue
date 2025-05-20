<template>
  <div class="list-container">
    <h2 class="title">{{ $t('patientList') }}</h2>

    <div class="table-wrapper">
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
            <td>{{ patient.name }}</td>
            <td>{{ patient.doctor }}</td>
            <td>{{ $t(patient.description) }}</td>
            <td>
              <span class="urgency-badge" :class="urgencyColor(patient.urgency)"></span>
              {{ $t(patient.urgency) }}
            </td>
            <!-- Room selection, click is stopped so it doesn't trigger row click -->
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
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();

const rooms = ['1', '2','3','4', '5', 'D10', '12', '13','14'];

const patients = ref([
  { name: 'Alisa Kleemann', doctor: 'Dr. Schmidt', description: 'descSevereTrauma', urgency: 'Immediate', room: 'A01' },
  { name: 'xyz', doctor: 'Dr. Haug', description: 'descHeadInjury', urgency: 'VeryUrgent', room: 'B02' },
  { name: 'Alice Fleischer', doctor: 'Dr. Schmidt', description: 'descArmFracture', urgency: 'Urgent', room: 'C05' },
  { name: 'Lilli Gabler', doctor: 'Dr. Torres', description: 'descFlu', urgency: 'Normal', room: 'D10' },
  { name: 'Lisa Kurz', doctor: 'Dr. Walter', description: 'descDiscomfort', urgency: 'NonUrgent', room: 'E12' },
  { name: 'Hildegard Slotta', doctor: 'Dr. Torres', description: 'descDeceased', urgency: 'PassedAway', room: '—' }
]);

const goToPatient = (index) => {
  router.push(`/patients/${index}`);
};

const urgencyColor = (level) => {
  switch (level) {
    case 'Immediate': return 'triage-red';
    case 'VeryUrgent': return 'triage-orange';
    case 'Urgent': return 'triage-yellow';
    case 'Normal': return 'triage-green';
    case 'NonUrgent': return 'triage-grey';
    case 'PassedAway': return 'triage-black';
    default: return '';
  }
};
</script>

<style scoped>
.list-container {
  padding: 2rem 3rem;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.title {
  font-size: 28px;
  font-weight: bold;
  margin-bottom: 2rem;
  font-family: system-ui, Avenir, Helvetica, Arial, sans-serif;
}

.table-wrapper {
  max-width: 1200px;
  width: 100%;
  overflow-x: auto;
  font-family: system-ui, Avenir, Helvetica, Arial, sans-serif;
}

.patient-table {
  width: 100%;
  border-collapse: collapse;
  cursor: pointer;
}

th, td {
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

.urgency-badge {
  display: inline-block;
  width: 12px;
  height: 12px;
  border-radius: 50%;
  margin-right: 8px;
  vertical-align: middle;
}

.room-select {
  padding: 6px 10px;
  font-size: 14px;
  border-radius: 4px;
  background-color: #f7f7f7;
  border: 1px solid #ccc;
}

/* Triage Colors */
.triage-red { background-color: #e53935; }
.triage-orange { background-color: #fb8c00; }
.triage-yellow { background-color: #fdd835; }
.triage-green { background-color: #43a047; }
.triage-grey { background-color: #bdbdbd; }
.triage-black { background-color: #212121; }
</style>