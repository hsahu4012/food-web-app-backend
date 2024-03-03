// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// console.log(import.meta.env.VITE_SOME_KEY)

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC6nw0LTVDdeSsDGlIbvATf77ZCak7OVx8",
  authDomain: "fooddelivery-2f0d3.firebaseapp.com",
  projectId: "fooddelivery-2f0d3",
  storageBucket: "fooddelivery-2f0d3.appspot.com",
  messagingSenderId: "612235809031",
  appId: "1:612235809031:web:dbdef9a9626e7e79e7b5a2",
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
