import { defineStore } from 'pinia';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '@/js/firebase';

export const useNotesStore = defineStore('storeNotes', {
  state: () => {
    return {
      notes: [],
    };
  },
  actions: {
    addNote(newText) {
      const newObject = {
        id: new Date().getTime().toString(),
        content: newText,
      };

      this.notes.unshift(newObject);
    },
    deleteNote(idDel) {
      this.notes = this.notes.filter((item) => item.id != idDel);
    },
    updateNote({ id, content }) {
      const index = this.notes.findIndex((note) => note.id === +id);
      this.notes[index].content = content;
    },
    async getNotes() {
      const querySnapshot = await getDocs(collection(db, 'notes'));
      querySnapshot.forEach((doc) => {
        this.notes.push({
          id: doc.id,
          content: doc.data().content,
        });
      });
    },
  },
  getters: {
    getNoteContent: (state) => {
      return (id) => {
        return state.notes.filter((note) => note.id === +id)[0].content;
      };
    },
    totalNotesCount: (state) => {
      return state.notes.length;
    },
    getTotalCharactersCount: (state) => {
      return state.notes.reduce((acc, current) => acc + current.content.length, 0);
    },
  },
});
