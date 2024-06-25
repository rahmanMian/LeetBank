
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-app.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-auth.js";


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

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);




// Define the sign-in function
export const signinUser = (email, password, event) => {
    event.preventDefault();  // Prevent default form submission

    // Initialize Firebase Auth
    const auth = getAuth();

    // Return a promise to handle asynchronous operation
    return new Promise((resolve, reject) => {
        // Attempt to sign in with email and password
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // User successfully signed in
                const user = userCredential.user;
                console.log('User signed in:', user);

                
                // Resolve the promise with a success indicator
                resolve(true);
            })
            .catch((error) => {
                // Handle sign-in errors
                const errorCode = error.code;
                const errorMessage = error.message;
                document.getElementById("signinMessage").innerHTML = "Incorrect email or password";

                // Reject the promise with a failure indicator
                
            });
    });
};