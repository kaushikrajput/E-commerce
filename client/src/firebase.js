import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import {getFirestore, doc, getDoc, setDoc, collection, query,getDocs, writeBatch, updateDoc} from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyDPTMs11KVDKQryTDgcYJ5LXOFBykHHiCs",
  authDomain: "e-commerce-350ae.firebaseapp.com",
  projectId: "e-commerce-350ae",
  storageBucket: "e-commerce-350ae.appspot.com",
  messagingSenderId: "533584430526",
  appId: "1:533584430526:web:43b2378d75042c6d65a5ef",
  measurementId: "G-ZSBCF4NENC",
};
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const storage = getStorage(app);

export const db = getFirestore();



export default app;
