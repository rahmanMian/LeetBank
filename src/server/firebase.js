import { initializeApp } from 'firebase/app';
// Follow this pattern to import other Firebase services
// import { } from 'firebase/<service>';

// Your web app's Firebase configuration
/**
 * Initialize Firebase with the provided configuration.
 * @param {object} firebaseConfig - Firebase configuration object.
 * @returns {object} Firebase app instance.
 */
const firebaseConfig = {
  apiKey: "AIzaSyCwrZPBnX6VJNaCGCkdURSsd6i8dBXhpy8",
  authDomain: "code-storage-app.firebaseapp.com",
  projectId: "code-storage-app",
  storageBucket: "code-storage-app.appspot.com",
  messagingSenderId: "806173123622",
  appId: "1:806173123622:web:964c782349ada991c472e7"
};

const app = initializeApp(firebaseConfig);
