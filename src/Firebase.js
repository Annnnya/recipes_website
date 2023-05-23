import { initializeApp } from "firebase/app";
const API_KEY = import.meta.env.VITE_API_KEY;

const firebaseConfig = {
  apiKey: API_KEY,
  authDomain: "web-final-project-e9403.firebaseapp.com",
  projectId: "web-final-project-e9403",
  storageBucket: "web-final-project-e9403.appspot.com",
  messagingSenderId: "689154149753",
  appId: "1:689154149753:web:b6d0b2039538dd4df1f3a8"
};

const app = initializeApp(firebaseConfig);