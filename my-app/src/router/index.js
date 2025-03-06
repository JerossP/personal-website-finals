import { createRouter, createWebHistory } from 'vue-router';
import index from '@/views/index.vue';
import gallery from '@/views/gallery.vue';
import comments from '@/views/comments.vue';
import reference from '../../../my-app/src/components/reference.vue';

const routes = [
  {
    path: '/',
    name: 'index',
    component: index
  },
  {
    path: '/gallery',
    name: 'gallery',
    component: gallery
  },
  {
    path: '/comments',
    name: 'comments',
    component: comments
  },
  {
    path: '/reference',
    name: 'reference',
    component: reference
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
