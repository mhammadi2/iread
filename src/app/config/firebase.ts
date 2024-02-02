
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";
import { getFirestore } from "firebase/firestore";
import "firebase/storage"
import { getStorage } from "firebase/storage";
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "irea-2acd0.firebaseapp.com",
  projectId: "irea-2acd0",
  storageBucket: "irea-2acd0.appspot.com",
  messagingSenderId: "974145668788",
  appId: "1:974145668788:web:c547aedf783a19de5339e1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
// for the photo storage to firebase
export const storage = getStorage(app);
export const fb = getDatabase(app);
