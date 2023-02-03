<template>
    <div class="auth">
        <div class="tabs is-centered">
            <ul>
                <li :class="{ 'is-active': !register }"><a @click.prevent="register = false">Login</a></li>
                <li :class="{ 'is-active': register }"><a @click.prevent="register = true">Register</a></li>
            </ul>
        </div>
        <div class="card auth-form">
            <div class="card-content">
                <div class="title has-text-centered">{{ formTitle }}</div>
                <form @submit.prevent="onSubmitHandler">
                    <div class="field">
                        <label class="label">Email</label>
                        <div class="control">
                            <input @focus="focusHandler" v-model="credentials.email" class="input" type="email"
                                placeholder="e.g. alexsmith@gmail.com">
                        </div>
                    </div>
                    <div class="field">
                        <label class="label">Password</label>
                        <div class="control">
                            <input @focus="focusHandler" v-model="credentials.password" class="input" type="password"
                                placeholder="Enter a password">
                        </div>
                    </div>
                    <div class="field is-grouped is-grouped-right">
                        <p class="has-text-danger pr-5 is-flex is-align-items-center">{{ formError }}</p>
                        <p class="control">
                            <button :disabled="!!formError" class="button is-primary">
                                {{ formTitle }}
                            </button>
                        </p>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, computed, reactive } from 'vue';
import { useAuthStore } from '@/stores/storeAuth'

const authStore = useAuthStore();
const register = ref(false);
const formError = ref('');

const formTitle = computed(() => {
   return register.value ? 'Register' : 'Login'
})
const focusHandler = () => {
    formError.value = ''
}

const onSubmitHandler = () => {
    if(!credentials.email || !credentials.password){
        formError.value = 'Please enter email or password'
        return;
    } else {
        if(register.value){
            authStore.registerUser(credentials)
        } else {
            authStore.loginUser(credentials)
        }
    }
}

const credentials = reactive({
    email: '',
    password: ''
})
</script>

<style scoped>
.auth-form {
    max-width: 400px;
    margin: 0 auto;
}
</style>