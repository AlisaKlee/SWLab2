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
    component: AddPatient,
    meta: { requiresAuth: true }
  },
  {
    path: '/welcome-hospital',
    name: 'Welcome hospital',
    component: WelcomeHospView,
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
