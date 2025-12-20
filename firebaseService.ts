import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import { getFirestore } from "firebase/firestore";

// Using the keys provided in the original request
const firebaseConfig = {
    apiKey: "AIzaSyA9Z-yCFrrHCSZBEAOwAfn7o0QoJQf2Lso",
    authDomain: "vibe-app-37c4a.firebaseapp.com",
    projectId: "vibe-app-37c4a",
    storageBucket: "vibe-app-37c4a.firebasestorage.app",
    messagingSenderId: "596796342540",
    appId: "1:596796342540:web:5dc0a810af5274ce26c929",
    measurementId: "G-448Z5N2QPB"
};

const app = firebase.initializeApp(firebaseConfig);
export const auth = firebase.auth();
export const db = getFirestore(app);