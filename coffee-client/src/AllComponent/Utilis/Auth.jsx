// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA4d36BdxHSnCk_173BUJhEf57AKQOsxG0",
  authDomain: "grud-project-7942e.firebaseapp.com",
  projectId: "grud-project-7942e",
  storageBucket: "grud-project-7942e.firebasestorage.app",
  messagingSenderId: "513336683752",
  appId: "1:513336683752:web:53159b9b1e3fd96d136d5d",
  measurementId: "G-T30EV5XZ5Y"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;