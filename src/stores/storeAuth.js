import { defineStore } from 'pinia';
import {
  createUserWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  signInWithEmailAndPassword,
} from 'firebase/auth';
import { auth } from '@/js/firebase';
import { useNotesStore } from './storeNotes';

export const useAuthStore = defineStore('storeAuth', {
  state: () => {
    return {
      user: {},
    };
  },
  actions: {
    init() {
      const noteStore = useNotesStore();
      onAuthStateChanged(auth, (user) => {
        if (user) {
          this.user = {
            id: user.uid,
            email: user.email,
          };
          this.router.push('/');
          noteStore.init();
        } else {
          this.user = {};
          this.router.replace('/auth');
        }
      });
    },
    registerUser({ email, password }) {
      console.log(email.password);
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          const user = userCredential.user;
        })
        .catch((error) => {
          console.log(`error: ${error.message}`);
        });
    },
    signOutUser() {
      signOut(auth)
        .then(() => {
          console.log('sign out');
        })
        .catch((error) => {
          console.log(`error: ${error.message}`);
        });
    },
    loginUser({ email, password }) {
      signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          const user = userCredential.user;
        })
        .catch((error) => {
          console.log(`error: ${error.message}`);
        });
    },
  },
  getters: {},
});
