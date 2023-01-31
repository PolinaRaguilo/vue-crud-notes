import { defineStore } from 'pinia';

export const useNotesStore = defineStore('storeNotes', {
  state: () => {
    return {
      notes: [
        {
          id: 1,
          content:
            'Platea mattis sit sit nisi interdum platea sit imperdiet faucibus. Et in ornare ultricies. Risus non dictumst. Ornare lectus et sed accumsan sit dictum odio. Cras quam, integer et leo, sapien orci, et. Morbi sodales dictumst. Odio. Nec luctus mauri.',
        },
        {
          id: 2,
          content: 'This is a short text',
        },
      ],
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
