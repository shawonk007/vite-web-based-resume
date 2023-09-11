import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: '/',
    name: 'welcome',
    component: () => import('@/views/Welcome.vue'),
    meta: {
      title: 'Welcome | Muhammad Nasir Uddin Khan Shawon'
    }
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('@/views/About.vue'),
    meta: {
      title: 'About Me | Muhammad Nasir Uddin Khan Shawon'
    }
  },
  {
    path: '/academic',
    name: 'academic',
    component: () => import('@/views/Academic.vue'),
    meta: {
      title: 'Academic | Muhammad Nasir Uddin Khan Shawon'
    }
  },
  {
    path: '/employment',
    name: 'employment',
    component: () => import('@/views/Employment.vue'),
    meta: {
      title: 'Employment | Muhammad Nasir Uddin Khan Shawon'
    }
  },
  {
    path: '/skills',
    name: 'skills',
    component: () => import('@/views/Abilities.vue'),
    meta: {
      title: 'Skills & Abilities | Muhammad Nasir Uddin Khan Shawon'
    }
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})
  
export default router