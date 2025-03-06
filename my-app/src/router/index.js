import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/components/index.vue'; // Ensure correct path

const routes = [
  { path: '/', component: Home },
  { path: '/gallery', component: () => import('@/components/gallery.vue') },
  { path: '/comments', component: () => import('@/components/comments.vue') },
  { path: '/reference', component: () => import('@/components/reference.vue') },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
