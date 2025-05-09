<template>
  <div class="page-container">
    <h1>Patient Details</h1>

    <div class="content">
      <!-- Linke Seite: Felder und Buttons -->
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

      <!-- Rechte Seite -->
      <div class="right">
        <div class="form">

          <!-- Timestamp -->
          <div class="timestamp-box">
            <div class="timestamp-label">Timestamp</div>
            <div class="timestamp-value">{{ timestamp }}</div>
          </div>

          <!-- Temperature -->
          <div class="temperature-box">
            <div class="temperature-label">Temperature</div>
            <div class="temperature-value">
              <span v-if="isTempCritical">⚠️</span> {{ temperature }} 36°C
            </div>
          </div>

          <!-- O₂ Saturation -->
          <div class="saturation-box">
            <div class="saturation-label">O₂ Saturation</div>
            <div class="saturation-value">{{ saturation }} 98%</div>
          </div>


          <!-- EKG -->
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
import PrimaryButton from '../components/PrimaryButton.vue';
import { useRoute } from 'vue-router';
const route = useRoute();
const patientId = route.params.id;


const patient = {
  name: 'Name: Max Mustermann',
  eta: 'Ambulance 1 Estimated arrival: 12 min',
  preCondition: 'Pre Condition: None',
  preMedication: 'Pre Medication: None'
};


//let medication = 'Medication: ';
//let description = 'Description: ';
let urgency = ': Immediate';
let timestamp = '15:00:00, 15.04.2025';

function handleUpdate() {
  alert('Updated');
}

function handleReset() {
  medication = '';
  description = '';
  urgency = '';
}

function handleEdit() {
  alert('Edit mode not implemented');
}

function handleShowHistory() {
  alert('Showing history...');
}

let medication = '';

function onMedicationInput(event) {
  const raw = event.target.value;
  const prefix = 'Medication: ';
  // Entferne alles vor dem Prefix, falls jemand zurücklöscht
  if (raw.startsWith(prefix)) {
    medication = raw.slice(prefix.length);
  } else {
    // Setze zurück, wenn das Prefix gelöscht wurde
    event.target.value = prefix + medication;
  }
}

let description = '';
function onDescriptionInput(event) {
  const raw = event.target.value;
  const prefix = 'Description: ';
  if (raw.startsWith(prefix)) {
    description = raw.slice(prefix.length);
  } else {
    event.target.value = prefix + description;
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

/* Linke und rechte Spalte */
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
  font-family: inherit;
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
  font-family: inherit;
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
  font-weight: plain;
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
  font-weight: plain;
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
  font-weight: 400;
  font-size: 14px;
  margin-bottom: 8px;
}

.timestamp-value {
  font-weight: 400;
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