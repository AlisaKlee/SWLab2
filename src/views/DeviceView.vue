<template>
  <div class="device-container">
    <h1 class="title">{{ $t('device') }}</h1>

    <!-- Eingabefelder -->
    <div class="input-group">
      <label class="input-label">{{ $t('deviceName') }}:</label>
      <input v-model="deviceName" class="input-field" :placeholder="$t('deviceName')" />
    </div>

    <div class="input-group">
      <label class="input-label">{{ $t('ambulance') }}:</label>
      <input v-model="ambulanceNumber" class="input-field" :placeholder="$t('ambulance')" />
    </div>
    <p v-if="errorMessage" class="error-text">{{ errorMessage }}</p>


    <!-- Verbindungsstatus -->
    <div
      class="status-badge"
      :class="connectionStatus === 'stable' ? 'status-stable' : 'status-lost'"
    >
      {{ connectionStatus === 'stable' ? $t('connectionStable') : $t('noConnection') }}
    </div>

    <!-- Buttons -->
    <div class="button-group">
      <button class="btn btn-primary" @click="addDevice">{{ $t('addDevice') }}</button>
      <button class="btn btn-secondary" @click="cancel">{{ $t('cancel') }}</button>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useI18n } from 'vue-i18n';

const deviceName = ref('');
const ambulanceNumber = ref('');
const connectionStatus = ref('stable');
const errorMessage = ref('');

const { t } = useI18n();

const addDevice = () => {
  if (!deviceName.value || !ambulanceNumber.value){
    errorMessage.value = t('message');
    return;
  }
    errorMessage.value = '';
    alert(t('addDevice') + ': ' + deviceName.value + ', ' + ambulanceNumber.value);
};

const cancel = () => {
  deviceName.value = '';
  ambulanceNumber.value = '';
};
</script>

<style scoped>
.device-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 4rem 2rem;
  font-family: system-ui, Avenir, Helvetica, Arial, sans-serif;
}

.title {
  font-size: 2.5rem;
  font-weight: bold;
  margin-bottom: 2rem;
}

.input-group {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 0.7rem;
  width: 300px;
}

.input-label {
  font-weight: bold;
  margin-bottom: 0.5rem;
}

.input-field {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 8px;
  background-color: #eae2f8;
  font-family: inherit;
}

.status-badge {
  margin: 1.5rem 0;
  padding: 0.6rem 1.2rem;
  border-radius: 10px;
  font-weight: 500;
  font-family: inherit;
  color: #000;
  opacity: 0.8;
}

.status-stable {
  background-color: rgba(76, 175, 80, 0.3);
}

.status-lost {
  background-color: rgba(244, 67, 54, 0.3);
}

.button-group {
  display: flex;
  gap: 1rem;
  margin-top: 1.5rem;
}

.btn {
  padding: 0.6rem 1.2rem;
  font-size: 1rem;
  border-radius: 8px;
  border: none;
  cursor: pointer;
  font-family: inherit;
}

.btn-primary {
  background-color: #000;
  color: #fff;
}

.btn-secondary {
  background-color: #e0e0e0;
  color: #000;
}

.error-text {
  color: red;
  font-size: 14px;
  margin-top: 0.3rem;
  margin-bottom: 0.3rem;
  font-family: system-ui, Avenir, Helvetica, Arial, sans-serif;
}
</style>
