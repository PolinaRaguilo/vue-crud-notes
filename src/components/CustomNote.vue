<template>
    <div class="card mb-4">
        <div class="card-content">
            <div class="content">
                {{ note.content }}
                <div class="columns is-mobile has-text-grey-light mt-2">
                    <small class="column">{{ contentLength }}</small>
                    <small class="column has-text-right">{{ dateFormatted }}</small>
                </div>
            </div>
        </div>
        <footer class="card-footer">
            <router-link :to='`/edit/${note.id}`' class="card-footer-item">Edit</router-link>
            <a class="card-footer-item" @click.prevent="modal.deleteNote = true">Delete</a>
        </footer>
        <DeleteModal v-if="modal.deleteNote" @closeModal="closeModal" :id="note.id"/>
    </div>
</template>

<script setup>
import { useDateFormat } from '@vueuse/shared';
import { computed, reactive } from 'vue';
import DeleteModal from './DeleteModal.vue';


const props = defineProps({
    note: {
        type: Object,
        required: true
    }
})

const dateFormatted = computed(() => {
    const propsDate = new Date(parseInt(props.note.date))
   return useDateFormat(propsDate, 'MM-DD-YYYY HH:mm:ss').value
})

const contentLength = computed(() => {
    const quantity = props.note.content.length
    return quantity === 1 ? `${quantity} character` : `${quantity} characters`
})

const modal = reactive({
    deleteNote: false
})

const closeModal = () => {
    modal.deleteNote = false
}



</script>