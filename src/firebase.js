// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDJvtrSNE2l5DUpkjlX-ww5qgQmhFbM_MQ",
    authDomain: "clone-3049f.firebaseapp.com",
    projectId: "clone-3049f",
    storageBucket: "clone-3049f.appspot.com",
    messagingSenderId: "230086385978",
    appId: "1:230086385978:web:1a410684ce4d37d5863003",
    measurementId: "G-18DNXRM1BH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
export const data_Baseing = getFirestore(app);
export const Provider = new GoogleAuthProvider()