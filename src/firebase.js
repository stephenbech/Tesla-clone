// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseApp = initializeApp{
  apiKey: "AIzaSyC3-PZQEXTETk29XQ9BLlF7n03jleVH4P4",
  authDomain: "to-do-cp-93bd8.firebaseapp.com",
  databaseURL: "https://to-do-cp-93bd8-default-rtdb.firebaseio.com",
  projectId: "to-do-cp-93bd8",
  storageBucket: "to-do-cp-93bd8.appspot.com",
  messagingSenderId: "1072065953760",
  appId: "1:1072065953760:web:6616c977072b8730c93585",
  measurementId: "G-5T34HBGVCT"
};

// Initialize Firebase
const db = getFirestore(firebaseApp);