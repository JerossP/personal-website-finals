import { createRouter, createWebHistory } from 'vue-router';
import index from '@/views/index.vue';
import Gallery from '@/views/Gallery.vue';
import Comments from '@/views/Comments.vue';
import Reference from '@/views/Reference.vue';

const routes = [
  {
    path: '/',
    name: 'index',
    component: index
  },
  {
    path: '/gallery',
    name: 'Gallery',
    component: Gallery
  },
  {
    path: '/comments',
    name: 'Comments',
    component: Comments
  },
  {
    path: '/reference',
    name: 'Reference',
    component: Reference
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
