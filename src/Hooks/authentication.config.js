// environment variable


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

const firebaseConfig = {
    apiKey: "AIzaSyAAk7Bu5gM3eTSFqHDTrzrEum445vXXcho",
    authDomain: "blood-donation-ff1a0.firebaseapp.com",
    projectId: "blood-donation-ff1a0",
    storageBucket: "blood-donation-ff1a0.appspot.com",
    messagingSenderId: "98731269454",
    appId: "1:98731269454:web:1827eb09c679ec4e86d21f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;