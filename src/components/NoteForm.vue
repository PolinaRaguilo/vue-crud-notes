<template>
    <div class="card has-background-success-dark p-4 mb-5">
        <div class="field">
            <div class="control">
                <textarea class="textarea" ref="textareaRef" :value="modelValue" @input="updateValue"
                    placeholder="Add a new note"></textarea>
            </div>
        </div>
        <div class="field is-grouped is-grouped-right">
            <div class="control">
                <slot name="buttons" />
            </div>
        </div>
    </div>
</template>
<script setup>
import { ref } from 'vue';


const props = defineProps({
    modelValue: {
        type: String,
        reauired: true
    }
})

const emit = defineEmits(['update:modelValue'])
const textareaRef = ref(null)

const updateValue = (event) => {
    emit('update:modelValue', event.target.value)
}

const focusTextarea = () => {
    textareaRef.value.focus()
}

defineExpose({
    focusTextarea
})


</script>