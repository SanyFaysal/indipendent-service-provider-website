// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBmASLkMNbXzdGiqXAJDytp1xBu0bKZ-2Y",
  authDomain: "math-man-48cd0.firebaseapp.com",
  projectId: "math-man-48cd0",
  storageBucket: "math-man-48cd0.appspot.com",
  messagingSenderId: "667545451479",
  appId: "1:667545451479:web:6e3b9fd4cdc51e294be992"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;