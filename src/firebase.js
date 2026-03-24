import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSy...", // ඔයාගේ පරණ ප්‍රොජෙක්ට් එකේ API Key එක මෙතනට දාන්න
  authDomain: "ai-cv-builder-b133c.firebaseapp.com",
  projectId: "ai-cv-builder-b133c",
  storageBucket: "ai-cv-builder-b133c.appspot.com",
  messagingSenderId: "209001554228",
  appId: "1:209001554228:web:d99bacc69c2907f4ff4561"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();

export const loginWithGoogle = () => {
  return signInWithPopup(auth, googleProvider);
};

export const logoutUser = () => {
  return signOut(auth);
};