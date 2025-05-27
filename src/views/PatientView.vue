<template>
  <div class="page-container" v-if="patient">
    <h1>{{ $t('patientDetails') }}</h1>

    <div class="content">
      <!-- LEFT -->
      <div class="left">
        <div class="form">
          <input :value="patient.eta" disabled :placeholder="$t('eta')" />
          <input :value="`${$t('fullName')}: ${patient.name}`" disabled class="full-input" />
          <input :value="patient.preCondition" disabled :placeholder="$t('preExistingCondition')" />
          <input :value="patient.preMedication" disabled :placeholder="$t('preExistingMedication')" />
        </div>

        <div class="form">
          <input
            :value="`${medicationLabel}: ${medication}`"
            @input="onMedicationInput"
            class="full-input"
          />
          <textarea
            :value="`${descriptionLabel}: ${description}`"
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
            <option value="Treated">{{ $t('Treated') }}</option>
            <option value="PassedAway">{{ $t('PassedAway') }}</option>
          </select>
        </div>

        <div class="button-row">
          <PrimaryButton :label="$t('update')" @click="handleUpdate" variant="primary" />
          <PrimaryButton :label="$t('reset')" @click="handleReset" variant="secondary" />
        </div>

        <div class="button-row">
          <PrimaryButton :label="$t('editPatientData')" @click="handleEdit" variant="secondary" />
        </div>
      </div>

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

        <div class="button-row mt-4">
          <PrimaryButton :label="$t('showHistory')" @click="handleShowHistory" variant="primary" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import { useRouter, useRoute } from 'vue-router';
import { useI18n } from 'vue-i18n';
import PrimaryButton from '../components/PrimaryButton.vue';
import PatientService from '../services/PatientService.js';

const { t } = useI18n();

const router = useRouter();
const route = useRoute();
const patientId = Number(route.params.id);

const patient = computed(() => PatientService.getPatientByIndex(patientId));
const medication = ref('');
const description = ref('');
const urgency = ref(patient.value?.urgency || '');
const temperature = ref(36);
const saturation = ref(98);
const timestamp = '15:00:00, 15.04.2025';
const isTempCritical = computed(() => temperature.value >= 38);

const medicationLabel = t('medication');
const descriptionLabel = t('description');

function handleUpdate() {
  PatientService.updateUrgency(patientId, urgency.value);
  alert('Patient updated.');
}

function handleReset() {
  medication.value = '';
  description.value = '';
  urgency.value = patient.value.urgency;
}

function handleEdit() {
  if (!patient.value || !patient.value.name) return;

  const nameParts = patient.value.name.trim().split(' ');
  const firstname = nameParts[0] || '';
  const lastname = nameParts.slice(1).join(' ') || '';

  router.push({
    name: 'EditPatient',
    query: {
      id: patientId,
      firstname,
      lastname,
      dob: patient.value.dob || '',
      gender: patient.value.gender || '',
      medication: medication.value || '',
      conditions: (patient.value.preCondition || '').replace(/^Pre condition:\s*/, '')
    }
  });
}

function handleShowHistory() {
  router.push('/history');
}

function onMedicationInput(event) {
  const prefix = medicationLabel + ': ';
  if (event.target.value.startsWith(prefix)) {
    medication.value = event.target.value.slice(prefix.length);
  } else {
    event.target.value = prefix + medication.value;
  }
}

function onDescriptionInput(event) {
  const prefix = descriptionLabel + ': ';
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

.button-row {
  display: flex;
  flex-direction: row;
  gap: 20px;
  justify-content: flex-start;
}

.full-input,
.full-textarea {
  width: 100%;
  box-sizing: border-box;
}

.urgency-select {
  width: 100%;
  font-size: 16px;
  padding: 12px;
  background-color: #e6e0e9;
  border-radius: 6px;
  border: none;
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