import { defineStore } from 'pinia';
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  onSnapshot,
  orderBy,
  query,
  updateDoc,
} from 'firebase/firestore';
import { db } from '@/js/firebase';

export const useNotesStore = defineStore('storeNotes', {
  state: () => {
    return {
      notes: [],
      notesLoading: false,
    };
  },
  actions: {
    async addNote(newText) {
      const date = new Date().getTime().toString();
      await addDoc(collection(db, 'notes'), {
        content: newText,
        dateStamp: date,
      });
    },
    async deleteNote(idDel) {
      await deleteDoc(doc(db, 'notes', idDel.toString()));
    },
    async updateNote({ id, content }) {
      const noteRef = doc(db, 'notes', id.toString());

      await updateDoc(noteRef, {
        content,
        show: true,
      });
    },
    async getNotes() {
      this.notesLoading = true;
      const notesQuery = query(collection(db, 'notes'), orderBy('dateStamp', 'desc'));
      onSnapshot(notesQuery, (querySnapshot) => {
        const newNotes = [];

        querySnapshot.forEach((doc) => {
          newNotes.push({
            id: doc.id,
            content: doc.data().content,
            date: doc.data().dateStamp,
          });
        });
        this.notes = newNotes;
        this.notesLoading = false;
      });
    },
  },
  getters: {
    getNoteContent: (state) => {
      return (id) => {
        return state.notes.filter((note) => note.id === id)[0].content;
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
