// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBTlGtXvjEBceIk8UCqzlHvK5HMkEs_RxQ",
  authDomain: "shibachat3835.firebaseapp.com",
  projectId: "shibachat3835",
  storageBucket: "shibachat3835.appspot.com",
  messagingSenderId: "470693901266",
  appId: "1:470693901266:web:c70a1a41f92df612510e0b",
  measurementId: "G-KSBBTYBNN8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
