// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAE5EoqYjLNrC_t1d3X6Yz_KgiTSEx7KiE",
  authDomain: "facebook-b4a19.firebaseapp.com",
  databaseURL: "https://facebook-b4a19-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "facebook-b4a19",
  storageBucket: "facebook-b4a19.firebasestorage.app",
  messagingSenderId: "482598994364",
  appId: "1:482598994364:web:6e883f5a14c84c18e7ebb9",
  measurementId: "G-7QK5NQXTTS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

export { db, analytics };