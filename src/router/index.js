import { createRouter, createWebHistory } from 'vue-router';
import VueNotes from '@/pages/VueNotes.vue';
import VueStats from '@/pages/VueStats.vue';
import VueEditNote from '@/pages/VueEditNote.vue';
import VueAuth from '@/pages/VueAuth.vue';

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
    {
      path: '/edit/:id',
      name: 'edit',
      component: VueEditNote,
    },
    {
      path: '/auth',
      name: 'auth',
      component: VueAuth,
    },
  ],
});

export default router;
