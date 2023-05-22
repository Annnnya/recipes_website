
import { initializeApp } from "firebase/app";
const API_KEY= import.meta.env.VITE_API_KEY;

const firebaseConfig = {
  apiKey: API_KEY,
  authDomain: "recipeswebsite-7037d.firebaseapp.com",
  projectId: "recipeswebsite-7037d",
  storageBucket: "recipeswebsite-7037d.appspot.com",
  messagingSenderId: "739752720946",
  appId: "1:739752720946:web:cda78c33040ecf846b9a2b"
};
export const app = initializeApp(firebaseConfig);
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
