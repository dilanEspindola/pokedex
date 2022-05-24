import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyBxst3neVIeKDgDntXqzvCB_RY08pDnZBQ',
  authDomain: 'pokedex-b1e40.firebaseapp.com',
  projectId: 'pokedex-b1e40',
  storageBucket: 'pokedex-b1e40.appspot.com',
  messagingSenderId: '551922504434',
  appId: '1:551922504434:web:9ee859e63e724bb2e0366b',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
