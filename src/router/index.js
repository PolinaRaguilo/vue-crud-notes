import { createRouter, createWebHistory } from 'vue-router';
import VueNotes from '@/pages/VueNotes.vue';
import VueStats from '@/pages/VueStats.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'notes',
      component: VueNotes,
    },
    {
      path: '/stats',
      name: 'stats',
      component: VueStats,
    },
  ],
});

export default router;
