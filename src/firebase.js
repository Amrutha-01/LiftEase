// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore"; 
import firebase from 'firebase/app';
import { getDatabase } from 'firebase/database'; // Import database functions''
import 'firebase/database';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAilM2Bzmt_Ei4d_SGR8uba-vQiJ5dtXVc",
  authDomain: "liftease-d6753.firebaseapp.com",
  projectId: "liftease-d6753",
  storageBucket: "liftease-d6753.appspot.com",
  messagingSenderId: "908359837783",
  appId: "1:908359837783:web:41f5a36e99167277c95b12",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

export const firestore = getFirestore(app);

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const database = getDatabase(app); // Initialize Realtime Database
