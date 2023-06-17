// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore/lite";

const firebaseConfig = {
  apiKey: "AIzaSyA7yIEF7pVIm5Sb_Fy8DhIN7fDBv_f-Zyg",
  authDomain: "vue-3-app-d90a8.firebaseapp.com",
  projectId: "vue-3-app-d90a8",
  storageBucket: "vue-3-app-d90a8.appspot.com",
  messagingSenderId: "757063998413",
  appId: "1:757063998413:web:56d49cc5c25d310a864284",
};
initializeApp(firebaseConfig);
const auth = getAuth();
const db = getFirestore();

export { auth, db };
