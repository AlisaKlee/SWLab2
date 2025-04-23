import { createRouter, createWebHistory } from 'vue-router';
import LoginView from '../views/LoginView.vue'; 
import AddPatient from '../views/AddPatient.vue';

const routes = [
  {
    path: '/',
    name: 'Login',
    component: LoginView
  },
  {
    path: '/add patient',
    name: 'Add Patient',
    component: AddPatient
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
