import { initializeApp } from 'firebase/app';
import { getFirestore, enableIndexedDbPersistence } from 'firebase/firestore';
import { getAnalytics } from 'firebase/analytics';

const firebaseConfig = {
  apiKey: "AIzaSyDLvGuxPFsNeGqgrbrWsw6uDMkt1ZCVDVI",
  authDomain: "nexus-bd-17bd8.firebaseapp.com",
  projectId: "nexus-bd-17bd8",
  storageBucket: "nexus-bd-17bd8.appspot.com",
  messagingSenderId: "979628101121",
  appId: "1:979628101121:web:4b844fdf9c3bbd4c06fa00",
  measurementId: "G-DPW6NSEL87"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

// Enable offline persistence
enableIndexedDbPersistence(db)
  .catch((err) => {
    if (err.code === 'failed-precondition') {
      console.warn('Multiple tabs open, persistence can only be enabled in one tab at a time.');
    } else if (err.code === 'unimplemented') {
      console.warn('The current browser does not support persistence.');
    }
  });

// Initialize Analytics only in browser environment
export const analytics = typeof window !== 'undefined' ? getAnalytics(app) : null;
