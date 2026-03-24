import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyAJwOg0livgyX1Hg7zcnzDebqgOF7zASeo",
  authDomain: "ai-cv-builder-b133c.firebaseapp.com",
  projectId: "ai-cv-builder-b133c",
  storageBucket: "ai-cv-builder-b133c.firebasestorage.app",
  messagingSenderId: "209001554228",
  appId: "1:209001554228:web:d99bacc69c2907f4ff4561",
  measurementId: "G-Q64CYY9YXW"
};

const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);

export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();

export const loginWithGoogle = async () => {
  try {
    const result = await signInWithPopup(auth, googleProvider);
    return result.user;
  } catch (error) {
    console.error("Login failed:", error.message);
    throw error;
  }
};

export const logoutUser = async () => {
  try {
    await signOut(auth);
  } catch (error) {
    console.error("Logout failed:", error.message);
    throw error;
  }
};