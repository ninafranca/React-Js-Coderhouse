// FIREBASE
import firebase from 'firebase/app';
import 'firebase/firestore';

// Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyAyvH7nWLF0D7DeZE-2NxWeoQ7EUALc5kc',
  authDomain: 'nanette-dfc10.firebaseapp.com',
  projectId: 'nanette-dfc10',
  storageBucket: 'nanette-dfc10.appspot.com',
  messagingSenderId: '77023151304',
  appId: '1:77023151304:web:f93ef1a1fb3a132a7251fd',
};

const fb = firebase.initializeApp(firebaseConfig);

export const db = fb.firestore();
