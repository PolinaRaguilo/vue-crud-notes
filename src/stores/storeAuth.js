import { defineStore } from 'pinia';
import { createUserWithEmailAndPassword, signOut } from 'firebase/auth';
import { auth } from '@/js/firebase';

export const useAuthStore = defineStore('storeAuth', {
  state: () => {
    return {};
  },
  actions: {
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
