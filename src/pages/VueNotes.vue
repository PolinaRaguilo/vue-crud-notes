<template>
  <div class="notes">
    <NoteForm v-model="newNote" ref="editNoteRef">
      <template #buttons>
        <button class="button is-link has-background-success" @click="addNoteHandler" :disabled="!newNote">
          Add New Note</button>
      </template>

    </NoteForm>

    <CustomNote v-for="note in noteStore.notes" :note="note" key="note.id" />

  </div>
</template>

<script setup>
import { ref } from 'vue';
import CustomNote from '@/components/CustomNote.vue';
import { useNotesStore } from '@/stores/storeNotes'
import NoteForm from '@/components/NoteForm.vue';

const newNote = ref('')
const editNoteRef = ref(null)

const noteStore = useNotesStore()

const addNoteHandler = () => {
  noteStore.addNote(newNote.value)
  newNote.value = ''
  editNoteRef.value.focusTextarea()
}

</script>

<style scoped>

</style>
