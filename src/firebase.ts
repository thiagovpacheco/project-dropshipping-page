import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyDCBQrHcG9MF5_BIUFVnDcqzLFc_QxLEhE",
  authDomain: "nexus-store-2023.firebaseapp.com",
  projectId: "nexus-store-2023",
  storageBucket: "nexus-store-2023.appspot.com",
  messagingSenderId: "1010264641235",
  appId: "1:1010264641235:web:d4c6a1f8d1b6c6c6c6c6c6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
const db = getFirestore(app);

// Initialize Auth
const auth = getAuth(app);

export { db, auth };
