import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: '/',
    name: 'welcome',
    component: () => import('@/views/Welcome.vue'),
    meta: {
      title: 'Welcome | Muhammad Nasir Uddin Khan Shawon'
    }
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})
  
export default router