
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-auth.js";




//you will need to add your own
const firebaseConfig = {
  apiKey: process.env.REACT_APP_AUTH_KEY,
  authDomain: "leetbank-auth.firebaseapp.com",
  projectId: "leetbank-auth",
  storageBucket: "leetbank-auth.appspot.com",
  messagingSenderId: "687062345726",
  appId: "1:687062345726:web:421eea1cc2d57fdfa602af",
  measurementId: "G-NP2RXNWYRQ"
};

// Initialize Firebase
const fireApp = initializeApp(firebaseConfig);
const auth = getAuth(fireApp);



 export const registerUser = (email, password, event)=>{
      event.preventDefault();
  if(!validateEmail(email)){
     window.alert("Invalid Email");
     return;
  }

  if(!validatePassword(password)){
    window.alert("Password length should be greater than 6 characters");
    return;
  }

  
  createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    // ...
   window.alert("user created");

  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
    window.alert("cannot add user");
  });
}



function validateEmail(email){
    const expression = /^[^@]+@\w+(\.\w+)+\w$/;
    return (expression.test(email) === true);
  }
  
  /**
   * Validates the length of a password.
   * @param {string} password - The password to validate.
   * @returns {boolean} - Returns true if the password length is greater than 6 characters, false otherwise.
   */
  
  function validatePassword(password){
    return (password.length > 6);
  }
  

