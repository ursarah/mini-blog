// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'


const firebaseConfig = {
    apiKey: "AIzaSyBI5NcY0HDsGGHjnA5oy1bGBjC7Rzql-p4",
    authDomain: "miniblog-fa2a0.firebaseapp.com",
    projectId: "miniblog-fa2a0",
    storageBucket: "miniblog-fa2a0.appspot.com",
    messagingSenderId: "341745363063",
    appId: "1:341745363063:web:bfc635a56d7950708bfe72",
    measurementId: "G-D3YV4PE671"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db } 