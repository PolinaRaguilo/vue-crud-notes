import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyBZY8NWignlK6-0FSzZ4amgHlme4YCCOqo',
  authDomain: 'vue-notes-86e03.firebaseapp.com',
  projectId: 'vue-notes-86e03',
  storageBucket: 'vue-notes-86e03.appspot.com',
  messagingSenderId: '481721699403',
  appId: '1:481721699403:web:6bf8aa55d3e9ef3054d1ce',
};

const firebaseApp = initializeApp(firebaseConfig);

export const db = getFirestore(firebaseApp);
