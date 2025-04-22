<template>
  <div class="patient-details">
    <label>Vorname:</label>
    <input type="text" v-model="editableFirstname" />

    <label>Nachname:</label>
    <input type="text" v-model="editableLastname" />

    <label>Geburtstag: </label>
    

    <div class="actions">
      <button @click="saveChanges">Änderungen speichern</button>
      <button @click="updateChanges">Zurücksetzen</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PatientDetails',
  props: {
    patient: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      editableFirstname: this.patient.firstname,
      editableLastname: this.patient.lastname
    }
  },
  methods: {
    saveChanges() {
      // Hier könntest du z. B. ein Event an den Parent schicken oder den Service nutzen
      const updatedPatient = {
        ...this.patient,
        firstname: this.editableFirstname,
        lastname: this.editableLastname
      }
      this.$emit('save', updatedPatient); // schickt das neue Objekt nach außen
    },
    resetChanges() {
      this.editableFirstname = this.patient.firstname;
      this.editableLastname = this.patient.lastname;
    }
  },
  watch: {
    patient(newPatient) {
      // Wenn sich der Patient von außen ändert, Felder aktualisieren
      this.editableFirstname = newPatient.firstname;
      this.editableLastname = newPatient.lastname;
    }
  }
}
</script>

<style scoped>
.patient-details {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  max-width: 300px;
}

label {
  font-weight: bold;
}

input {
  padding: 0.4rem;
  border: 1px solid #ccc;
  border-radius: 6px;
}

.actions {
  margin-top: 1rem;
  display: flex;
  gap: 1rem;
}
</style>
