// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBsOujPtkWkstLzW3kXAUASpbNuGteOE9Y",
  authDomain: "homes-food.firebaseapp.com",
  projectId: "homes-food",
  storageBucket: "homes-food.appspot.com",
  messagingSenderId: "302205868851",
  appId: "1:302205868851:web:113ef7bd0b62f30e4afc46"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;