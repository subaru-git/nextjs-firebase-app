import { initializeApp, getApps } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";
import { getFunctions } from "firebase/functions";

const firebaseConfig = {
  apiKey: "AIzaSyAc7bOqkQPE0Q83gPjUnPhxwytEbJsetJI",
  authDomain: "fir-auth-template-5d66c.firebaseapp.com",
  projectId: "fir-auth-template-5d66c",
  storageBucket: "fir-auth-template-5d66c.appspot.com",
  messagingSenderId: "456748994419",
  appId: "1:456748994419:web:c320a2e4a5f08ad54e7f06",
  measurementId: "G-ZWCPN7FZN8",
};

if (!getApps()?.length) initializeApp(firebaseConfig);

export const analytics =
  typeof window !== "undefined" ? getAnalytics() : undefined;
export const db = getFirestore();
export const storage = getStorage();
export const auth = getAuth();
export const funcions = getFunctions();
