import { createRouter, createWebHistory } from 'vue-router';
import LoginView from '../views/LoginView.vue'; 
import AddPatient from '../views/AddPatient.vue';
import WelcomeHospView from '../views/WelcomeHospView.vue';

const routes = [
  {
    path: '/',
    name: 'Login',
    component: LoginView
  },
  {
    path: '/add-patient',
    name: 'Add Patient',
    component: AddPatient
  },
  {
    path: '/welcome-hospital',
    name: 'Welcome hospital',
    component: WelcomeHospView
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
