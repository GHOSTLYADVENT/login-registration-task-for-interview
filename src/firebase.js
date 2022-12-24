import { getFirestore } from '@firebase/firestore';
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDFNff2Fyq5nTJ9gnfWBP9sHlHMyBXyJLY",
  authDomain: "sampleapp-520c5.firebaseapp.com",
  projectId: "sampleapp-520c5",
  storageBucket: "sampleapp-520c5.appspot.com",
  messagingSenderId: "168055309317",
  appId: "1:168055309317:web:88388dc7bc903a2cbc886c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const firestore = getFirestore(app);