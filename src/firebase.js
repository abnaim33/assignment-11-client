
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// import { collection, addDoc } from "firebase/firestore";
const firebaseConfig = {
    apiKey: "AIzaSyBTyh0T_wn2ul8GnIFWyEWGmewDBJ4Qg0E",
    authDomain: "assignment-9-46021.firebaseapp.com",
    projectId: "assignment-9-46021",
    storageBucket: "assignment-9-46021.appspot.com",
    messagingSenderId: "815039288189",
    appId: "1:815039288189:web:c2742d003f31e877357214"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth();

const firestore = getFirestore(app)


export { app, auth, firestore };