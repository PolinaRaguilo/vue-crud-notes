import { createRouter, createWebHistory } from 'vue-router';
import VueNotes from '@/pages/VueNotes.vue';
import VueStats from '@/pages/VueStats.vue';
import VueEditNote from '@/pages/VueEditNote.vue';
import VueAuth from '@/pages/VueAuth.vue';
import { useAuthStore } from './../stores/storeAuth';

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

router.beforeEach(async (to, from) => {
  const authStore = useAuthStore();
  if (!authStore.user.id && to.name !== 'auth') {
    return { name: 'auth' };
  }
  if (authStore.user.id && to.name === 'auth') {
    return false;
  }
});

export default router;
