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
  </div>
</template>

<script setup>
import { useNotesStore } from '@/stores/storeNotes';

 const notesStore =  useNotesStore()
</script>

<style scoped>

</style>
