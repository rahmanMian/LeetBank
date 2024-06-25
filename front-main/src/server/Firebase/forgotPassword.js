import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-app.js";
import { getAuth, sendPasswordResetEmail} from "https://www.gstatic.com/firebasejs/10.11.1/firebase-auth.js";


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


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);