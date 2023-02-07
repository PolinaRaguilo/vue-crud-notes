<template>
    <nav class="navbar is-success" role="navigation" aria-label="main navigation">
        <div class="container is-max-desktop px-2">
            <div class="navbar-brand">
                <div class="navbar-item is-size-4 is-family-monospace">
                    Noteballs
                </div>

                <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false"
                    data-target="navbarBasicExample" :class="{ 'is-active': showMobileNav }"
                    @click.prevent="showMobileNav = !showMobileNav" ref="navbarMenuRef">
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                </a>
            </div>

            <div id="navbarBasicExample" class="navbar-menu  is-align-items-center"
                :class="{ 'is-active': showMobileNav }">
                <button v-if="authStore.user.id" class="button is-small is-primary is-light ml-3"
                    @click="logoutHandler">
                    Log out {{ authStore.user.email }}
                </button>
                <router-link v-else to="/auth" class="button is-small is-primary is-light ml-3">
                    Auth
                </router-link>

                <div class="navbar-end">
                    <router-link @click="hideNavHandler" class="navbar-item" to="/" active-class="is-active">Notes
                    </router-link>
                    <router-link @click="hideNavHandler" class="navbar-item" to="/stats" active-class="is-active">Stats
                    </router-link>
                </div>
            </div>
        </div>
    </nav>
</template>

<script setup>
import { ref } from 'vue';
import { onClickOutside } from '@vueuse/core';
import { useAuthStore } from '../../stores/storeAuth'


const authStore = useAuthStore()
let showMobileNav = ref(false)
const navbarMenuRef = ref(null)


const hideNavHandler = () => {
    showMobileNav.value = false
}

const logoutHandler = () => {
    authStore.signOutUser()
    showMobileNav.value = false
}

onClickOutside(navbarMenuRef, () => hideNavHandler())




</script>

<style scoped>
@media (max-width: 1023px) {
    .navbar-menu {
        position: absolute;
        left: 0;
        width: 100%;
    }
}
</style>
