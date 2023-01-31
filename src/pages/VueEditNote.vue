<template>
    <div class="edit-note">
        VueEditNote {{ $route.params.id }}
    </div>
    <NoteForm v-model="noteContent" ref="editNoteRef" bgColor="link" labelText="Edit Note">
        <template #buttons>
            <button @click="$router.push('/')" class="button is-link is-light mr-2">
                Cancel</button>
            <button @click="handleSave" class="button is-link has-background-link" :disabled="!noteContent">
                Save Note</button>

        </template>

    </NoteForm>

</template>
<script setup>
import NoteForm from '@/components/NoteForm.vue';
import { ref } from 'vue';
import { useNotesStore } from '@/stores/storeNotes';
import { useRoute, useRouter } from 'vue-router';

const route = useRoute();
const router = useRouter()

const noteStore = useNotesStore();

const noteContent = ref('');

noteContent.value = noteStore.getNoteContent(route.params.id);

const handleSave = () => {
    const updatedInfo = {
        id: route.params.id,
        content: noteContent.value
    }
    noteStore.updateNote(updatedInfo)
    router.push('/')
}
</script>