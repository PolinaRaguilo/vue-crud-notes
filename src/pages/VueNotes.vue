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

    <CustomNote v-for="note in notes" :note="note" key="note.id" />


  </div>
</template>

<script setup>
import { ref } from 'vue';
import CustomNote from '../components/CustomNote.vue';

const newNote = ref('')
const newNoteRef = ref(null)

const notes = ref([
  {
    id: 1,
    content: 'Platea mattis sit sit nisi interdum platea sit imperdiet faucibus. Et in ornare ultricies. Risus non dictumst. Ornare lectus et sed accumsan sit dictum odio. Cras quam, integer et leo, sapien orci, et. Morbi sodales dictumst. Odio. Nec luctus mauri.'
  },
  {
    id: 2,
    content: 'This is a short text'
  }
])

const addNoteHandler = () => {
  const newObject = {
    id: new Date().getTime().toString(),
    content: newNote.value
  }
  notes.value.unshift(newObject)
  newNote.value = ''
  newNoteRef.value.focus()
}
</script>

<style scoped>

</style>
