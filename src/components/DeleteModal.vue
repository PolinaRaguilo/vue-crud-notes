<template>
    <div class="modal is-active p-4" >
  <div class="modal-background"></div>
  <div class="modal-card" ref="modalRef">
    <header class="modal-card-head">
      <p class="modal-card-title">Delete</p>
      <button class="delete" aria-label="close" @click="closeHandler"></button>
    </header>
    <section class="modal-card-body">
      Are you sure you want to delete this note?
    </section>
    <footer class="modal-card-foot is-justify-content-flex-end">
        <button class="button" @click="closeHandler">No</button>
      <button class="button is-danger" @click="deleteHandler">Yes</button>
    </footer>
  </div>
</div>
</template>

<script setup>
import { onClickOutside } from '@vueuse/core';
import { onMounted, onUnmounted, ref } from 'vue';
import {useNotesStore} from '@/stores/storeNotes'

const notesStore = useNotesStore()
const modalRef = ref(null)
const emits = defineEmits(['closeModal'])
const props = defineProps({
    id:{
        type: String,
        required: true
    }
})

const closeHandler = () => {
    emits('closeModal')
}

const deleteHandler = () => {
    notesStore.deleteNote(props.id)
    closeHandler()
}

onClickOutside(modalRef, () => closeHandler())


const handleKeyboard = (e) => {
    if(e.key === 'Escape'){
        closeHandler()
      }
}

onMounted(() => {
    document.addEventListener('keyup',handleKeyboard)
})

onUnmounted(() => {
    document.removeEventListener('keyup', handleKeyboard)
})



</script>