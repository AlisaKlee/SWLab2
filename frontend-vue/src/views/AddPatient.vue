<template>
    <div class="container">
      //Titel
      <h1>Add Patient</h1>
  
      //Eingabefeld 
      <div class="form">
        <input v-model="firstname" placeholder="Firstname" />
        <input v-model="lastname" placeholder="Lastname" />
        <input v-model="dateOfBirth" placeholder="Date of birth" />

        <input v-model="preExistingCondition" placeholder="Pre existing condition" />
        <input v-model="medication" placeholder="Medication" />
      </div>
  
      //Drow down menu Gender
      <select v-model = "gender" >
        <option disabled value = "" >Please select gender> </option>
        <option> Male </option>
        <option> Female </option>  
        <option> Other </option>
      </select>
    
      //Buttons
      <div class="button-group">
        <PrimaryButton label="Add" @click="handleAdd" variant="primary" />
        <PrimaryButton label="Cancel" @click="handleCancel" variant="secondary" />
      </div>
    </div>
</template>

<script>
  import PrimaryButton from '../components/PrimaryButton.vue';
  import axios from 'axios';

  export default {
    components : {
        PrimaryButton
    },
    data() {
        return {
            firstname: '',
            lastname: '',
            dateOfBirth: '',
            gender: '',                             //ToDo: prüfen ob gender richtig 
            preExistingCondition: '',
            medication: ''
        };
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
            const response = await axios.post('http://localhost:8080/api/patients', newPatient);
            console.log('Added to Server:', response.data), this.firstname, this.lastname;
            alert('Patient was added sucessfully!');

            this.firstname = '';
            this.lastname = '';
            this.gender = '';
            this.dateOfBirth = '';
            this.preExistingCondition = '';
            this.medication = '';
            } catch (error) {
            console.error('Error while trying to add patient', error);
            alert('Error trying to add patient!');
            }
        },
        handleCancel() {
            console.log('Cancelled');
            alert('Cancelled.');
            this.firstname = '';
            this.lastname = '';
            this.dateOfBirth = '';
            this.gender = '';                        //ToDo: prüfen ob gender richtig 
            this.preExistingCondition = '';
            this.medication = '';
        }
      }
  };
</script>


<style scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;
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

input {
  padding: 12px;
  font-size: 16px;
  border: none;
  background-color: #e6e0e9;
  border-radius: 6px;
}

.button-group {
  display: flex;
  gap: 20px;
  margin-top: 30px;
}
</style>
