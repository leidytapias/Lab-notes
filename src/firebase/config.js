// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore/lite";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyASEfmNsQTmTwfJBpIrLpad4MnNWD5POBc",
  authDomain: "lab-notes-bec23.firebaseapp.com",
  projectId: "lab-notes-bec23",
  storageBucket: "lab-notes-bec23.appspot.com",
  messagingSenderId: "333493226507",
  appId: "1:333493226507:web:e38b22a8a92f0125520b0e",
};

// Initialize Firebase
export const firebaseApp = initializeApp(firebaseConfig);
export const firbaseAuth = getAuth(firebaseApp);
export const firebaseDB = getFirestore(firebaseApp);
