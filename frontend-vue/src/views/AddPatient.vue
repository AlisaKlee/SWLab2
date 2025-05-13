<template>
  <div class="container">
    <!-- Title -->
    <h1>{{ $t('addPatient') }}</h1>

    <!-- Input fields -->
    <div class="form">
      <input v-model="firstname" :placeholder="$t('firstName')" />
      <input v-model="lastname" :placeholder="$t('lastName')" />
      <input
        v-model="dateOfBirth"
        type="date"
        :max="maxDate"
        :placeholder="$t('dateOfBirth')"
      />
      <input v-model="preExistingCondition" :placeholder="$t('preExistingCondition')" />
      <input v-model="medication" :placeholder="$t('medication')" />

      <!-- Dropdown Gender -->
      <select v-model="gender">
        <option disabled value="">{{ $t('selectGender') }}</option>
        <option>{{ $t('genderMale') }}</option>
        <option>{{ $t('genderFemale') }}</option>
        <option>{{ $t('genderOther') }}</option>
      </select>
    </div>

    <!-- Buttons -->
    <div class="button-group">
      <PrimaryButton :label="$t('add')" @click="handleAdd" variant="primary" />
      <PrimaryButton :label="$t('cancel')" @click="handleCancel" variant="secondary" />
    </div>
  </div>
</template>

<script>
import PrimaryButton from '../components/PrimaryButton.vue';
import axios from 'axios';

export default {
  components: { PrimaryButton },
  data() {
    return {
      firstname: '',
      lastname: '',
      dateOfBirth: '',
      gender: '',
      preExistingCondition: '',
      medication: ''
    };
  },
  computed: {
    maxDate() {
      return new Date().toISOString().split('T')[0];
    }
  },
  methods: {
    async handleAdd() {
      const newPatient = {
        firstname: this.firstname,
        lastname: this.lastname,
        dateOfBirth: this.dateOfBirth,
        gender: this.gender,
        preExistingCondition: this.preExistingCondition,
        medication: this.medication
      };

      try {
        await axios.post('http://localhost:8080/api/patients', newPatient);
        alert(this.$t('patientAdded'));

        this.firstname = '';
        this.lastname = '';
        this.dateOfBirth = '';
        this.gender = '';
        this.preExistingCondition = '';
        this.medication = '';
      } catch (error) {
        alert(this.$t('patientAddError'));
      }
    },
    handleCancel() {
      this.firstname = '';
      this.lastname = '';
      this.dateOfBirth = '';
      this.gender = '';
      this.preExistingCondition = '';
      this.medication = '';
      alert(this.$t('cancelled'));
    }
  }
};
</script>

<style scoped>
.container {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;
  font-family: system-ui, Avenir, Helvetica, Arial, sans-serif;
}

h1 {
  font-size: 36px;
  font-weight: bold;
  margin-bottom: 40px;
}

.form {
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 300px;
}

input,
select {
  padding: 12px;
  font-size: 16px;
  border: none;
  background-color: #e6e0e9;
  border-radius: 6px;
  width: 100%;
  box-sizing: border-box;
}

input[type="date"] {
  font-family: inherit;
}

.button-group {
  display: flex;
  gap: 20px;
  margin-top: 30px;
}
</style>
