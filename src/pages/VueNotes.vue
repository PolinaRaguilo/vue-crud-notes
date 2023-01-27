<template>
  <div class="notes">
    <div class="card has-background-success-dark p-4 mb-5">
      <div class="field">
        <div class="control">
          <textarea ref="newNoteRef" v-model="newNote" class="textarea" placeholder="Add a new note"></textarea>
        </div>
      </div>
      <div class="field is-grouped is-grouped-right">
        <div class="control">
          <button class="button is-link has-background-success" @click="addNoteHandler" :disabled="!newNote">Add New
            Note</button>
        </div>
      </div>
    </div>

    <CustomNote v-for="note in noteStore.notes" :note="note" key="note.id" />

  </div>
</template>

<script setup>
import { ref } from 'vue';
import CustomNote from '@/components/CustomNote.vue';
import { useNotesStore } from '@/stores/storeNotes'

const newNote = ref('')
const newNoteRef = ref(null)
const noteStore = useNotesStore()

const addNoteHandler = () => {
  noteStore.addNote(newNote.value)
  newNote.value = ''
  newNoteRef.value.focus()
}

</script>

<style scoped>

</style>
