<template>
    <div class = "container">
        <!--Titel-->
        <h1> Welcome Dr. Schmidt! </h1>

        <!--Eingabefeld-->
        <div class = "form">
            <input v-model="showPatient" placeholder="Search for patient" />
        </div>

        <!--Buttons-->
        <div class = "button-group" >
            <PrimaryButton label = "Show all patients" @click="handleShowAllPatients" variant = "primary" />
            <PrimaryButton label = "Add patient" @click="addPatient" variant = "secondary" />
        </div>    
    </div>
</template>

<script>
    import PrimaryButton from '../components/PrimaryButton.vue';

    export default {
        components : {
            PrimaryButton
        },
        data() {
            return {
                showPatient: ''
            };
        },
        methods : {
            handleShowAllPatients() {

            },
            addPatient() {
              this.$router.push('/add-patient');
            }
        }
    }
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
