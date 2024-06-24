
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
    document.getElementById("emailError").innerHTML = "Please enter a valid Email";
     return;
  }

  if(!validatePassword(password)){
    document.getElementById("passwordError").innerHTML = "Password length should be greater than 6 characters";
    return;
  }

  
  createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    // ...
  
    document.getElementById("loginMessage").innerHTML = "Account Successfully Created";
    setTimeout(() => {
      }, 1400);
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
  });

}


function validateEmail(email){
    const expression = /^[-a-z0-9~!$%^&*_=+}{\'?]+(\.[-a-z0-9~!$%^&*_=+}{\'?]+)*@([a-z0-9_][-a-z0-9_]*(\.[-a-z0-9_]+)*\.(aero|arpa|biz|com|coop|edu|gov|info|int|mil|museum|name|net|org|pro|travel|mobi|[a-z][a-z])|([0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}))(:[0-9]{1,5})?$/i;
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
  

