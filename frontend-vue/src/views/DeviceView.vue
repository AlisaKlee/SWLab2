<template>
    <div class="device-container">
      <!-- Titel -->
      <h1 class="title">Device</h1>
  
      <!-- Eingabefelder -->
      <div class="input-group">
        <label class="input-label">Device name:</label>
        <input v-model="deviceName" class="input-field" placeholder="Raspberry Pi (1)" />
      </div>
  
      <div class="input-group">
        <label class="input-label">Ambulance:</label>
        <input v-model="ambulanceNumber" class="input-field" placeholder="1" />
      </div>
  
      <!-- Verbindungsstatus -->
      <div
        class="status-badge"
        :class="connectionStatus === 'stable' ? 'status-stable' : 'status-lost'"
      >
        {{ connectionStatus === 'stable' ? 'Connection stable' : 'No connection' }}
      </div>
  
      <!-- Buttons -->
      <div class="button-group">
        <button class="btn btn-primary" @click="addDevice">Add device</button>
        <button class="btn btn-secondary" @click="cancel">Cancel</button>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'DeviceView',
    data() {
      return {
        deviceName: '',
        ambulanceNumber: '',
        connectionStatus: 'stable' 
      };
    },
    methods: {
      addDevice() {
        console.log('Device added:', this.deviceName, this.ambulanceNumber);
        alert('Device was added.')
      },
      cancel() {
        this.deviceName = '';
        this.ambulanceNumber = '';
      }
    }
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
    margin-bottom: 1.5rem;
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
  </style>
  