import React from 'react'
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

// Your Firebase configuration object
const firebaseConfig = {
  apiKey: process.env.REACT_APP_AUTH_KEY,
  authDomain: "leetbank-auth.firebaseapp.com",
  databaseURL: "https://leetbank-auth-default-rtdb.firebaseio.com",
  projectId: "leetbank-auth",
  storageBucket: "leetbank-auth.appspot.com",
  messagingSenderId: "687062345726",
  appId: "1:687062345726:web:421eea1cc2d57fdfa602af",
  measurementId: "G-NP2RXNWYRQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
const db = getFirestore(app);

// Now you can use `db` to interact with Firestore



export const addUser = (email) =>{
  db.collection("users").add({
    email: email,
    questions:[]
  })
  .then((docRef) => {
    console.log("Document written with ID: ", docRef.id);
})
.catch((error) => {
    console.error("Error adding document: ", error);
})};

