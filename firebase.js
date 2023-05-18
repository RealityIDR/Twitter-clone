// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD6_oFp9fzV8dmBP6lIU5kyjja-7zrR81s",
  authDomain: "twitter-clone-5f2f5.firebaseapp.com",
  projectId: "twitter-clone-5f2f5",
  storageBucket: "twitter-clone-5f2f5.appspot.com",
  messagingSenderId: "31195031615",
  appId: "1:31195031615:web:c1d272a05f403fe23d708a",
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export default app;
export { db, storage };
