
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-app.js";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-auth.js";

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

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export const googleSignin = (event) => {
    event.preventDefault();
    
return new Promise((resolve)  =>{
signInWithPopup(auth, provider)
  .then((result) => {
    // This gives you a Google Access Token. You can use it to access the Google API.
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    // The signed-in user info.
    const user = result.user;
    // IdP data available using getAdditionalUserInfo(result)
    // ...
    resolve(true);
  }).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.customData.email;
    // The AuthCredential type that was used.
    const credential = GoogleAuthProvider.credentialFromError(error);
    // ...
})
});
}