import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyAmX3mtXoTSdK8AJTa1bdKTRGmlFpmACsk",
  authDomain: "food-database-ddc89.firebaseapp.com",
  projectId: "food-database-ddc89",
  storageBucket: "food-database-ddc89.appspot.com",
  messagingSenderId: "962041525841",
  appId: "1:962041525841:web:0786d56bcdc84fc38d6a70",
  measurementId: "G-YQD59MZX62",
});

const db = firebaseApp.firestore();
export default db;
