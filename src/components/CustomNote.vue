<template>
    <div class="card mb-4">
        <div class="card-content">
            <div class="content">
                {{ note.content }}
                <div class="has-text-right has-text-grey-light mt-2">
                    <small>{{ contentLength }}</small>
                </div>
            </div>
        </div>
        <footer class="card-footer">
            <router-link :to='`/edit/${note.id}`' class="card-footer-item">Edit</router-link>
            <a class="card-footer-item" @click.prevent="modal.deleteNote = true">Delete</a>
        </footer>
        <DeleteModal v-if="modal.deleteNote" @closeModal="closeModal" :id="+note.id"/>
    </div>
</template>

<script setup>
import { computed, reactive } from 'vue';
import DeleteModal from './DeleteModal.vue';

const props = defineProps({
    note: {
        type: Object,
        required: true
    }
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