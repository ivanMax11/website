import { createRouter, createWebHistory } from 'vue-router';
import HomeComponent from '../components/HomeComponent.vue';
//import Services from '../components/Services.vue'
//import About from '../components/About.vue';
//import Contact from '../components/Contacts';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeComponent,
  },
  /*  
  {
    path: '/services', 
    name: 'Services', 
    component: Services,
  },
  {
    path: '/about', 
    name: 'About', 
    component: About,
  },
  {
    path: '/Contact', 
    name: 'Contact', 
    component: Contact,
  }*/
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
