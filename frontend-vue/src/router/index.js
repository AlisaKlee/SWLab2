import { createRouter, createWebHistory } from 'vue-router';
import LoginView from '../views/LoginView.vue';
import AddPatient from '../views/AddPatient.vue';
import WelcomeHospView from '../views/WelcomeHospView.vue';
import PatientList from '../views/PatientList.vue'
import PatientDetails from '../components/PatientDetails.vue';
import History from '../views/History.vue';

const routes = [
  {
    path: '/',
    name: 'Login',
    component: LoginView
  },
  {
    path: '/welcome-hospital',
    name: 'WelcomeHospital',
    component: WelcomeHospView,
    meta: { requiresAuth: true }
  },
  {
    path: '/add-patient',
    name: 'AddPatient',
    component: AddPatient,
    meta: { requiresAuth: true }
  },
  {
    path: '/patients/:id',
    name: 'PatientDetails',
    component: PatientDetails,
    meta: { requiresAuth: true }
  },
  {
    path: '/history',
    name: 'History',
    component: History,
    meta: { requiresAuth: true }
  },
  {
    path: '/patient-list',
    name: 'PatientList',
    component: PatientList,
    meta: { requiresAuth: true }
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

router.beforeEach((to, from, next) => {
  const isLoggedIn = localStorage.getItem('session') === 'true';

  if (to.meta.requiresAuth && !isLoggedIn) {
    next('/');
  } else if (to.path === '/' && isLoggedIn) {
    next('/welcome-hospital');
  } else {
    next();
  }
});

export default router;