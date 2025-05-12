<template>
  <div class="page-container">
    <h1>Patient Details</h1>

    <div class="content">
      <div class="left">
        <div class="form">
          <input :value="patient.eta" disabled placeholder="Ambulance Estimated Arrival" />
          <input :value="patient.name" disabled placeholder="Full Name" />
          <input :value="patient.preCondition" disabled placeholder="Pre-existing Condition" />
          <input :value="patient.preMedication" disabled placeholder="Pre-existing Medication" />
        </div>

        <div class="form">
          <input
            :value="`Medication: ${medication}`"
            @input="onMedicationInput"
            class="full-input"
          />
          <textarea
            :value="`Description: ${description}`"
            @input="onDescriptionInput"
            rows="3"
            class="full-textarea"
          />
      
          <!--Urgency-->
          <select v-model="urgency" class="urgency-select">
            <option disabled value="">Select urgency</option>
            <option>Immediate</option>
            <option>Very urgent</option>
            <option>Urgent</option>
            <option>Normal</option>
            <option>Non urgent</option>
            <option>Passed away</option>
          </select>
        </div>

        <div class="button-group">
          <PrimaryButton label="Update" @click="handleUpdate" variant="primary" />
          <PrimaryButton label="Reset" @click="handleReset" variant="secondary" />
          <PrimaryButton label="Edit Patient Data" @click="handleEdit" variant="secondary" />
        </div>
      </div>

      <div class="right">
        <div class="form">
          <div class="timestamp-box">
            <div class="timestamp-label">Timestamp</div>
            <div class="timestamp-value">{{ timestamp }}</div>
          </div>

          <div class="temperature-box">
            <div class="temperature-label">Temperature</div>
            <div class="temperature-value">
              <span v-if="isTempCritical">⚠️</span> {{ temperature }} 36°C
            </div>
          </div>

          <div class="saturation-box">
            <div class="saturation-label">O₂ Saturation</div>
            <div class="saturation-value">{{ saturation }} 98%</div>
          </div>

          <textarea disabled class="full-textarea">EKG: [EKG Curve Placeholder]</textarea>
        </div>

        <div class="button-group mt-4">
          <PrimaryButton label="Show History" @click="handleShowHistory" variant="primary" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import PrimaryButton from '../components/PrimaryButton.vue';
import { useRouter, useRoute } from 'vue-router';

const router = useRouter();
const route = useRoute();
const patientId = route.params.id;

const patients = [
  { name: 'Name: Max Mustermann', gender: 'Male', dob:'01/01/2005', eta: 'Ambulance 1, ETA: 12 min', preCondition: 'Pre condition: None', preMedication: 'Pre medication: None' },
  { name: 'Name: Laura Köhler', gender: 'Female', dob:'16/01/2005', eta: 'Ambulance 3, ETA: 8 min', preCondition: 'Pre condition: Head injury', preMedication: 'Pre medication: None' },
  { name: 'Name: Sarah Mayer', gender: 'Female', dob:'23/05/2001', eta: 'Ambulance 2, ETA: 15 min', preCondition: 'Pre condition: Arm fracture', preMedication: 'Pre medication: Ibuprofen' },
  { name: 'Name: Tom Maier', gender: 'Male', dob:'19/09/1992', eta: 'Ambulance 1, ETA: 20 min', preCondition: 'Pre condition: Flu', preMedication: 'Pre medication: Paracetamol' },
  { name: 'Name: Lisa Kurz', gender: 'Female', dob:'30/07/1990', eta: 'Ambulance 5, ETA: 5 min', preCondition: 'Pre condition: Discomfort', preMedication: 'Pre medication: None' },
  { name: 'Name: Hildegard Slotta',gender: 'Female', dob:'17/12/1965', eta: 'Ambulance 6, ETA: 0 min', preCondition: 'Pre condition: Deceased', preMedication: 'Pre medication: None' }
];

const patient = computed(() => patients[patientId]);

let timestamp = '15:00:00, 15.04.2025';
const medication = ref('');
const description = ref('');
const urgency = ref('');
const temperature = ref(36); // optional
const saturation = ref(98); // optional
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
  const raw = event.target.value;
  const prefix = 'Medication: ';
  if (raw.startsWith(prefix)) {
    medication.value = raw.slice(prefix.length);
  } else {
    event.target.value = prefix + medication.value;
  }
}

function onDescriptionInput(event) {
  const raw = event.target.value;
  const prefix = 'Description: ';
  if (raw.startsWith(prefix)) {
    description.value = raw.slice(prefix.length);
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
.prefix {
  padding: 12px;
  font-size: 16px;
  font-family: inherit;
  font-weight: 400;
  background-color: #d6d0dc;
  color: #444;
  white-space: nowrap;
  border-right: 1px solid #ccc;
}
.full-input {
  padding: 12px;
  font-size: 16px;
  font-family: system-ui, Avenir, Helvetica, Arial, sans-serif;
  font-weight: 400;
  border: none;
  background-color: #e6e0e9;
  border-radius: 6px;
  width: 100%;
  box-sizing: border-box;
}
.full-textarea {
  padding: 12px;
  font-size: 16px;
  font-family: system-ui, Avenir, Helvetica, Arial, sans-serif;
  font-weight: 400;
  border: none;
  background-color: #e6e0e9;
  border-radius: 6px;
  resize: vertical;
  width: 100%;
  min-height: 80px;
  box-sizing: border-box;
}

.temperature-box {
  background-color: rgba(255, 100, 100, 0.2);
  border-radius: 12px;
  padding: 20px;
  text-align: center;
  font-family: system-ui, Avenir, Helvetica, Arial, sans-serif;
  font-size: 16px;
  font-weight: 400;
  color: #000;
}
.temperature-label {
  margin-bottom: 8px;
}
.temperature-value {
  font-size: 20px;
}
.saturation-box {
  background-color: rgba(100, 180, 255, 0.2);
  border-radius: 12px;
  padding: 20px;
  text-align: center;
  font-family: system-ui, Avenir, Helvetica, Arial, sans-serif;
  font-size: 16px;
  font-weight: 400;
  color: #000;
}
.saturation-label {
  margin-bottom: 8px;
}
.saturation-value {
  font-size: 20px;
}
.timestamp-box {
  background-color: rgba(144, 238, 144, 0.2);
  border-radius: 12px;
  padding: 20px;
  text-align: center;
  font-family: system-ui, Avenir, Helvetica, Arial, sans-serif;
  font-size: 16px;
  font-weight: 400;
  color: #000;
}
.timestamp-label {
  font-size: 14px;
  margin-bottom: 8px;
}
.timestamp-value {
  font-size: 18px;
}
.urgency-select {
  padding: 12px;
  font-size: 16px;
  font-family: system-ui, Avenir, Helvetica, Arial, sans-serif;
  border: none;
  background-color: #e6e0e9;
  border-radius: 6px;
  width: 100%;
}
</style>
