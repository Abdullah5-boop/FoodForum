// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCmhT3EeJd3_uSOtYYm9NK5f_HQLEvJnx0",
  authDomain: "foodforum-62b9c.firebaseapp.com",
  projectId: "foodforum-62b9c",
  storageBucket: "foodforum-62b9c.appspot.com",
  messagingSenderId: "745950743334",
  appId: "1:745950743334:web:a0ba288059fdb6bc0d4fe7",
  measurementId: "G-68E053F488"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);