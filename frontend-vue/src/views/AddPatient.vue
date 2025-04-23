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

export default {
    components : {
        PrimaryButton
    }
}

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
