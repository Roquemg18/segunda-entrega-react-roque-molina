// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore, collection} from 'firebase/firestore'
import 'firebase/compat/auth';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBcCIP2CSwDv1fVNnK_q1QKLHQFzL3Do7M",
    authDomain: "react-coder-house-roquemg.firebaseapp.com",
    projectId: "react-coder-house-roquemg",
    storageBucket: "react-coder-house-roquemg.appspot.com",
    messagingSenderId: "566722372798",
    appId: "1:566722372798:web:5b108740c2124a069a2aef",
    measurementId: "G-E98FEBSJH3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);//firebase
export const productsCollection = collection(db, "products")
