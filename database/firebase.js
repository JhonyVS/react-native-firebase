
import firebase from 'firebase/compat/app';

import 'firebase/compat/auth';

import 'firebase/compat/firestore';
 
const firebaseConfig = {
  apiKey: "AIzaSyB5pGtX2OhGcIHU6NklKZ7zkbNu7eVhOnM",
  authDomain: "tallerbd-d1077.firebaseapp.com",
  projectId: "tallerbd-d1077",
  storageBucket: "tallerbd-d1077.appspot.com",
  messagingSenderId: "823248769449",
  appId: "1:823248769449:web:b9f5174106a00282ce34b8",
  measurementId: "G-KJTH8SE08N"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

export default {
  firebase,
  db
};