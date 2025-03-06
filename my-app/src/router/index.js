// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router';
import index from '@/views/index.vue';
import comments from '@/views/comments.vue';
import gallery from '@/views/gallery.vue';
import reference from '@/views/reference.vue';

const routes = [
  { path: '/', component: index },
  { path: '/comments', component: comments },
  { path: '/gallery', component: gallery },
  { path: '/reference', component: reference },

];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;