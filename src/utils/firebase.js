// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCFyK_cyGquOQ8wSI0r6HfFGl1JJ2T0oAY",
  authDomain: "netflix-gpt-485a2.firebaseapp.com",
  projectId: "netflix-gpt-485a2",
  storageBucket: "netflix-gpt-485a2.appspot.com",
  messagingSenderId: "465043206840",
  appId: "1:465043206840:web:a1ee3639f5259e1532ba4d",
  measurementId: "G-F0FM32RB67",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
