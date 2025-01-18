import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: "reactchat-9aef2.firebaseapp.com",
  projectId: "reactchat-9aef2",
  storageBucket: "reactchat-9aef2.firebasestorage.app",
  messagingSenderId: "785972491144",
  appId: "1:785972491144:web:2a852d5e413926dfe1403d"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth()
export const db = getFirestore()
export const storage = getStorage()