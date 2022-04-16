// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD4MGCUlG3N6OWyACaZmbFjHcQHOA91E_A",
  authDomain: "blogapp-22b3d.firebaseapp.com",
  projectId: "blogapp-22b3d",
  storageBucket: "blogapp-22b3d.appspot.com",
  messagingSenderId: "445979530551",
  appId: "1:445979530551:web:3e28b32de86cea8deef6b2",
  measurementId: "G-8F7SNS4D29"
};



// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth (app);