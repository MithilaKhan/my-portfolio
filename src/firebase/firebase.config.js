// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC-qNjT2jMGImHINOEsL05BMNt9PFZKgJc",
  authDomain: "my-protfolio-bddeb.firebaseapp.com",
  projectId: "my-protfolio-bddeb",
  storageBucket: "my-protfolio-bddeb.appspot.com",
  messagingSenderId: "373750127758",
  appId: "1:373750127758:web:43ba09defb55bc379fbddf"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app