<template>
    <div class="edit-note">
        VueEditNote {{ $route.params.id }}
    </div>
    <NoteForm v-model="noteContent" ref="editNoteRef" bgColor="link" labelText="Edit Note">
        <template #buttons>
            <button @click="$router.push('/')" class="button is-link is-light">
                Cancel</button>
            <button class="button is-link has-background-link" :disabled="!noteContent">
                Save Note</button>

        </template>

    </NoteForm>

</template>
<script setup>
import NoteForm from '@/components/NoteForm.vue';
import { ref } from 'vue';

const noteContent = ref('')
</script>