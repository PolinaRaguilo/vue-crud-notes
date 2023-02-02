import { defineStore } from 'pinia';
import {
  collection,
  deleteDoc,
  doc,
  onSnapshot,
  orderBy,
  query,
  setDoc,
  updateDoc,
} from 'firebase/firestore';
import { db } from '@/js/firebase';

export const useNotesStore = defineStore('storeNotes', {
  state: () => {
    return {
      notes: [],
    };
  },
  actions: {
    async addNote(newText) {
      const newId = new Date().getTime().toString();
      await setDoc(doc(db, 'notes', newId), {
        content: newText,
        id: newId,
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
      const notesQuery = query(collection(db, 'notes'), orderBy('id', 'desc'));
      onSnapshot(notesQuery, (querySnapshot) => {
        const newNotes = [];

        querySnapshot.forEach((doc) => {
          newNotes.push({
            id: doc.id,
            content: doc.data().content,
          });
        });
        this.notes = newNotes;
      });
    },
  },
  getters: {
    getNoteContent: (state) => {
      return (id) => {
        return state.notes.filter((note) => +note.id === +id)[0].content;
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
