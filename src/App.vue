<template>
  <NavBar />
  <div class="container is-max-desktop px-2 py-4">
    <router-view />
  </div>
</template>

<script setup>
import { onMounted } from 'vue';
import NavBar from './components/Layout/NavBar.vue';
import { useAuthStore } from './stores/storeAuth';

const authStore = useAuthStore()

onMounted(() => {
  authStore.init()
})
</script>

<style>
@import 'bulma/css/bulma.min.css';
</style>
