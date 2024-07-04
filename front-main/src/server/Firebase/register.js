
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-auth.js";
import { addUserToDB } from "../../add/addQuestion.jsx";



//you will need to add your own
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
const fireApp = initializeApp(firebaseConfig);
const auth = getAuth(fireApp);



 export const registerUser = (email, password1, password2, event)=>{
      event.preventDefault();

    
  if(!passwordMatch(password1, password2)){
    document.getElementById("passwordError").innerHTML = "Passwords do not match";
    document.getElementById("passwordMatchError").innerHTML = "Passwords do not match";
    document.getElementById("emailError").innerHTML = "";
    return;
  }

  
  if(!validateEmail(email)){
    document.getElementById("emailError").innerHTML = "Please enter a valid Email";
    document.getElementById("passwordError").innerHTML = "";
    document.getElementById("passwordMatchError").innerHTML = "";
     return;
  }

  if(!validatePassword(password1)){
    document.getElementById("passwordError").innerHTML = "Password length should be greater than 6 characters";
    document.getElementById("emailError").innerHTML = "";
    return;
  }

  
  createUserWithEmailAndPassword(auth, email, password1)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    // ...
  
    document.getElementById("loginMessage").innerHTML = "Account Successfully Created";
    addUserToDB(email);
    setTimeout(() => {
      window.location.reload();
      }, 2000);  
  })
  .catch((error) => {
    window.alert("User Already Exists or Creation Error");
    // ..
  });

}


function validateEmail(email){
    const expression = /^[-a-z0-9~!$%^&*_=+}{\'?]+(\.[-a-z0-9~!$%^&*_=+}{\'?]+)*@([a-z0-9_][-a-z0-9_]*(\.[-a-z0-9_]+)*\.(aero|arpa|biz|com|coop|edu|gov|info|int|mil|museum|name|net|org|pro|travel|mobi|[a-z][a-z])|([0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}))(:[0-9]{1,5})?$/i;
    return (expression.test(email) === true);
  }
  

  function validatePassword(password){
    return (password.length > 6);
  }

  function passwordMatch(password1, password2){
     return password1 === password2;
  }
  

