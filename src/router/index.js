import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/about',
    component: () => import('../views/About.vue'),
    name: 'home',
    meta: {
      label: 'home页面'
    }
  },
  {
    path: '/other',
    component: () => import('../views/Other.vue'),
    name: 'other',
    meta: {
      label: 'other页面'
    }
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router;
