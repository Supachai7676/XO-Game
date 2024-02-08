import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDupQ1tdhEq6HhvBadDODnT7WsfTKuBLx0",
  authDomain: "xoxo-ae9a0.firebaseapp.com",
  projectId: "xoxo-ae9a0",
  storageBucket: "xoxo-ae9a0.appspot.com",
  messagingSenderId: "267428863450",
  appId: "1:267428863450:web:e7717e8183a170090534e3"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
