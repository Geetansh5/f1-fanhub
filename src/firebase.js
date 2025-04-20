// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAxZwwoGxwc2KwzA58fwR1mu063d4DxfSw",
  authDomain: "f1-fanhub.firebaseapp.com",
  projectId: "f1-fanhub",
  storageBucket: "f1-fanhub.firebasestorage.app",
  messagingSenderId: "439672064220",
  appId: "1:439672064220:web:fb054bc87a54c367a78c19",
  measurementId: "G-9DT4XDJLBK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication
const auth = getAuth(app);

// ✅ Export the auth object
export { auth };
