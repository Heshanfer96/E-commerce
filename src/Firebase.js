import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
import { getFirestore  } from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyDpW39-WBLqn2uvy2N85c_OE10umtx0nTU",
    authDomain: "e-commerce-94cf1.firebaseapp.com",
    projectId: "e-commerce-94cf1",
    storageBucket: "e-commerce-94cf1.appspot.com",
    messagingSenderId: "971263275026",
    appId: "1:971263275026:web:876e0e770d1aac1f61e8cb",
    measurementId: "G-4F5DKK9X73"
};

const firebaseApp= initializeApp(firebaseConfig);

const db = getFirestore()
const auth=getAuth(firebaseApp)

export {db,auth}; 