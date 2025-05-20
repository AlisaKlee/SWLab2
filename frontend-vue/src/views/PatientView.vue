<template>
  <div class="page-container">
    <h1>{{ $t('patientDetails') }}</h1>

    <div class="content">
      <!-- LEFT -->
      <div class="left">
        <div class="form">
          <input :value="patient.eta" disabled :placeholder="$t('eta')" />
          <input :value="patient.name" disabled :placeholder="$t('fullName')" />
          <input :value="patient.preCondition" disabled :placeholder="$t('preExistingCondition')" />
          <input :value="patient.preMedication" disabled :placeholder="$t('preExistingMedication')" />
        </div>

        <div class="form">
          <input
            :value="`${$t('medication')}: ${medication}`"
            @input="onMedicationInput"
            class="full-input"
          />
          <textarea
            :value="`${$t('description')}: ${description}`"
            @input="onDescriptionInput"
            rows="3"
            class="full-textarea"
          />

          <select v-model="urgency" class="urgency-select">
            <option disabled value="">{{ $t('selectUrgency') }}</option>
            <option value="Immediate">{{ $t('Immediate') }}</option>
            <option value="VeryUrgent">{{ $t('VeryUrgent') }}</option>
            <option value="Urgent">{{ $t('Urgent') }}</option>
            <option value="Normal">{{ $t('Normal') }}</option>
            <option value="NonUrgent">{{ $t('NonUrgent') }}</option>
            <option value="PassedAway">{{ $t('PassedAway') }}</option>
          </select>
        </div>

        <div class="button-group">
          <PrimaryButton :label="$t('update')" @click="handleUpdate" variant="primary" />
          <PrimaryButton :label="$t('reset')" @click="handleReset" variant="secondary" />
          <PrimaryButton :label="$t('editPatientData')" @click="handleEdit" variant="secondary" />
        </div>
      </div>

      <!-- RIGHT -->
      <div class="right">
        <div class="form">
          <div class="timestamp-box">
            <div class="timestamp-label">{{ $t('timestamp') }}</div>
            <div class="timestamp-value">{{ timestamp }}</div>
          </div>

          <div class="temperature-box">
            <div class="temperature-label">{{ $t('temperature') }}</div>
            <div class="temperature-value">
              <span v-if="isTempCritical">⚠️</span> {{ temperature }} °C
            </div>
          </div>

          <div class="saturation-box">
            <div class="saturation-label">{{ $t('oxygen') }}</div>
            <div class="saturation-value">{{ saturation }} %</div>
          </div>

          <textarea disabled class="full-textarea">{{ $t('ekgPlaceholder') }}</textarea>
        </div>

        <div class="button-group mt-4">
          <PrimaryButton :label="$t('showHistory')" @click="handleShowHistory" variant="primary" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import { useRouter, useRoute } from 'vue-router';
import PrimaryButton from '../components/PrimaryButton.vue';

const router = useRouter();
const route = useRoute();
const patientId = route.params.id;

const patients = [
  { name: 'Name: Max Mustermann', gender: 'Male', dob: '2005-01-01', eta: 'Ambulance 1, ETA: 12 min', preCondition: 'Pre condition: None', preMedication: 'Pre medication: None' },
  { name: 'Name: Laura Köhler', gender: 'Female', dob: '2005-01-16', eta: 'Ambulance 3, ETA: 8 min', preCondition: 'Pre condition: Head injury', preMedication: 'Pre medication: None' },
  { name: 'Name: Sarah Mayer', gender: 'Female', dob: '2001-05-23', eta: 'Ambulance 2, ETA: 15 min', preCondition: 'Pre condition: Arm fracture', preMedication: 'Pre medication: Ibuprofen' },
  { name: 'Name: Tom Maier', gender: 'Male', dob: '1992-09-19', eta: 'Ambulance 1, ETA: 20 min', preCondition: 'Pre condition: Flu', preMedication: 'Pre medication: Paracetamol' },
  { name: 'Name: Lisa Kurz', gender: 'Female', dob: '1990-07-30', eta: 'Ambulance 5, ETA: 5 min', preCondition: 'Pre condition: Discomfort', preMedication: 'Pre medication: None' },
  { name: 'Name: Hildegard Slotta', gender: 'Female', dob: '1965-12-17', eta: 'Ambulance 6, ETA: 0 min', preCondition: 'Pre condition: Deceased', preMedication: 'Pre medication: None' }
];

const patient = computed(() => patients[patientId]);
const timestamp = '15:00:00, 15.04.2025';
const medication = ref('');
const description = ref('');
const urgency = ref('');
const temperature = ref(36);
const saturation = ref(98);
const isTempCritical = computed(() => temperature.value >= 38);

function handleUpdate() {
  alert('Patient data was updated.');
}

function handleReset() {
  medication.value = '';
  description.value = '';
  urgency.value = '';
}

function handleEdit() {
  router.push({
    path: '/edit-patient',
    query: {
      id: patientId,
      firstname: patient.value.name.split(' ')[1],
      lastname: patient.value.name.split(' ')[2],
      dob: patient.value.dob,
      gender: patient.value.gender,
      medication: medication.value,
      conditions: patient.value.preCondition.replace(/^Pre condition:\s*/, '') || ''
    }
  });
}

function handleShowHistory() {
  router.push('/history');
}

function onMedicationInput(event) {
  const prefix = 'Medication: ';
  if (event.target.value.startsWith(prefix)) {
    medication.value = event.target.value.slice(prefix.length);
  } else {
    event.target.value = prefix + medication.value;
  }
}

function onDescriptionInput(event) {
  const prefix = 'Description: ';
  if (event.target.value.startsWith(prefix)) {
    description.value = event.target.value.slice(prefix.length);
  } else {
    event.target.value = prefix + description.value;
  }
}
</script>

<style scoped>
.page-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 40px;
  font-family: system-ui, Avenir, Helvetica, Arial, sans-serif;
}
h1 {
  font-size: 36px;
  font-weight: bold;
  margin-bottom: 40px;
}
.content {
  display: flex;
  gap: 80px;
  justify-content: center;
  width: 100%;
  max-width: 1100px;
}
.left,
.right {
  display: flex;
  flex-direction: column;
  gap: 30px;
  width: 320px;
}
.form {
  display: flex;
  flex-direction: column;
  gap: 20px;
}
input,
textarea,
select {
  padding: 12px;
  font-size: 16px;
  border: none;
  background-color: #e6e0e9;
  border-radius: 6px;
  resize: none;
}
textarea {
  min-height: 80px;
}
.button-group {
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
}
.full-input,
.full-textarea {
  width: 100%;
  box-sizing: border-box;
}
.timestamp-box,
.temperature-box,
.saturation-box {
  border-radius: 12px;
  padding: 20px;
  text-align: center;
}
.timestamp-box {
  background-color: rgba(144, 238, 144, 0.2);
}
.temperature-box {
  background-color: rgba(255, 100, 100, 0.2);
}
.saturation-box {
  background-color: rgba(100, 180, 255, 0.2);
}
</style>
