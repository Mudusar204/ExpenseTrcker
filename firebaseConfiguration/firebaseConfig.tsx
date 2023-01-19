// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDY1qcf_n4qJhNIPEbr7-3ZaYetP0NTdrs",
  authDomain: "crud-fa6bf.firebaseapp.com",
  projectId: "crud-fa6bf",
  storageBucket: "crud-fa6bf.appspot.com",
  messagingSenderId: "381169395633",
  appId: "1:381169395633:web:4a6df8ea684e4a7d7bbf90"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db=getFirestore(app)
export {db}