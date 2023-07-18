import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import 'firebase/compat/firestore'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDx4yR4yzlpBjgaVnfSsAjIXCfSlPCcHno",
    authDomain: "linkedin-d57df.firebaseapp.com",
    projectId: "linkedin-d57df",
    storageBucket: "linkedin-d57df.appspot.com",
    messagingSenderId: "137359945682",
    appId: "1:137359945682:web:14d7156238ff122ae7220b",
    measurementId: "G-LEDEJJQFL3"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export {db, auth};