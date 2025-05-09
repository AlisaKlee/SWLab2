import { createRouter, createWebHistory } from 'vue-router';

import LoginView from '../views/LoginView.vue';
import AddPatient from '../views/AddPatient.vue';
import WelcomeDoctorView from '../views/WelcomeDoctorView.vue';
import WelcomeParamedicView from '../views/WelcomeParamedicView.vue';
import PatientList from '../views/PatientList.vue';
import History from '../views/History.vue';
import SettingView from '../views/SettingView.vue'; 
import DeviceView from '../views/DeviceView.vue';
import PatientView from '../components/PatientDetails.vue';

const routes = [
  {
    path: '/',
    name: 'Login',
    component: LoginView
  },
  {
    path: '/welcomeDoctorView',
    name: 'WelcomeDoctor',
    component: WelcomeDoctorView,
    meta: { requiresAuth: true }
  },
  {
    path: '/welcomeParamedicView',
    name: 'WelcomeParamedic',
    component: WelcomeParamedicView,
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
    component: PatientView,
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
  },
  {
    path: '/settings',
    name: 'Settings',
    component: SettingView, 
    meta: { requiresAuth: true }
  },
  {
    path: '/device',
    name: 'Device',
    component: DeviceView,
    meta: { requiresAuth: true }
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

router.beforeEach((to, from, next) => {
  const isLoggedIn = localStorage.getItem('session') === 'true';
  const role = localStorage.getItem("role");

  if (to.meta.requiresAuth && !isLoggedIn) {
    next('/');
  } else if (to.path === '/' && isLoggedIn) {
    if (role == 'Doctor') {
      next('/welcomeDoctorView');
    }
    else if (role == 'Paramedic') {
      next('/welcomeParamedicView');
    }
    else {
      next('/');
    }
  } else {
    next();
  }
});

export default router;
