<template>
  <div class="notes">
    <table class="table">
      <thead>
        <tr>
          <th>
            Stat
          </th>
          <th>
            Value 
          </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Number of notes</td>
          <td>{{ notesStore.totalNotesCount }}</td>
        </tr>
        <tr>
          <td>Number of Charaacters (of all notes)</td>
          <td>{{ notesStore.getTotalCharactersCount }}</td>
        </tr> 
      </tbody>
  </table>
  <input v-model="reviewNoteball" v-autofocus class="input" type="text" placeholder="Do you love noteballs?" maxlength="50"/>
  </div>
</template>

<script setup>
import { useNotesStore } from '@/stores/storeNotes';
import { vAutofocus } from '@/directives/vAutofocus';
import {useWatchCharachters} from '@/use/useWatchCharacters';
import { ref } from 'vue';


 const notesStore =  useNotesStore()
 const reviewNoteball = ref('')

 useWatchCharachters(reviewNoteball, 50)

</script>

<style scoped>

</style>
