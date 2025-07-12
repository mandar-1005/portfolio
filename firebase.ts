// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDD926Qm8YI6fIQeSGUzeGK0Fmh-_mBpGo",
  authDomain: "portfolio-fced2.firebaseapp.com",
  projectId: "portfolio-fced2",
  storageBucket: "portfolio-fced2.firebasestorage.app",
  messagingSenderId: "392864203828",
  appId: "1:392864203828:web:f889fd005aaf587de9b661",
  measurementId: "G-MQHTL720VC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

export { app, analytics, db }; 