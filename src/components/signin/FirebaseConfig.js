// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDl4gWWFIDl-1WwYDudTTDmw2ItyODyBJE",
  authDomain: "admin-password-edde7.firebaseapp.com",
  projectId: "admin-password-edde7",
  storageBucket: "admin-password-edde7.appspot.com",
  messagingSenderId: "372813446359",
  appId: "1:372813446359:web:745bcbb62131ab993e8492",
  measurementId: "G-ZD7X5LKJDF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


export const database = getAuth();
export default app;