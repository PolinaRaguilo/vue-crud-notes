<template>
    <div :class='`card has-background-${bgColor}-dark p-4 mb-5`'>
        <label v-if="labelText" class='label has-text-white'>{{ labelText }}</label>
        <div class="field">
            <div class="control">
                <textarea class="textarea" ref="textareaRef" :value="modelValue" @input="updateValue"
                    :placeholder="placeholder"></textarea>
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
        required: true
    },
    bgColor: {
        type: String,
        default: 'success'
    },
    placeholder: {
        type: String,
        default: 'Type something...'
    },
    labelText: {
        type: String,
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