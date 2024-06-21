// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD4Ta7a2upeu3OmhAmZGhQSOq9YOvclYBQ",
  authDomain: "appavaliacao2-f3465.firebaseapp.com",
  projectId: "appavaliacao2-f3465",
  storageBucket: "appavaliacao2-f3465.appspot.com",
  messagingSenderId: "601958745041",
  appId: "1:601958745041:web:f545b62fee8a711dbd96f0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app); // para disponibilizar a autenticação
export const db = getFirestore(app);

