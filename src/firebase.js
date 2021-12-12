// import firebase from "firebase";
// import { initializeApp } from 'firebase/app';
import firebase from "firebase/compat/app"
import "firebase/compat/auth"
import "firebase/compat/firestore"


const firebaseConfig = {
    apiKey: "AIzaSyBk3ih6PbGkmVRXKTRkl8S_J9Dc8wmLKVg",
    authDomain: "linkedin-clone-77ebe.firebaseapp.com",
    projectId: "linkedin-clone-77ebe",
    storageBucket: "linkedin-clone-77ebe.appspot.com",
    messagingSenderId: "943667765212",
    appId: "1:943667765212:web:9790ed6fbc2086be3ef919"
  };

// const firebaseApp = firebase.initializeApp(firebaseConfig);
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };