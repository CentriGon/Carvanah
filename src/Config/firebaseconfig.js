// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCjkcdsAjSaksPqlYKU2qExYrGmX4k9-Ro",
  authDomain: "carvanah-b04f0.firebaseapp.com",
  projectId: "carvanah-b04f0",
  storageBucket: "carvanah-b04f0.appspot.com",
  messagingSenderId: "748127639457",
  appId: "1:748127639457:web:23af3a0a98bd3d9f7b1de0",
  measurementId: "G-SJG32V7JWY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
