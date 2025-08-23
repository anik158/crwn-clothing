// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {
        getAuth, 
        // signInWithRedirect, 
        signInWithPopup, 
        GoogleAuthProvider 
      } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCFVmZhAsN9N02JJkA49jP-DqTDSxxLmBU",
  authDomain: "crown-clothing-db-dd627.firebaseapp.com",
  projectId: "crown-clothing-db-dd627",
  storageBucket: "crown-clothing-db-dd627.firebasestorage.app",
  messagingSenderId: "993844598044",
  appId: "1:993844598044:web:7fd64e7f7ac94ecc55d6d9"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider  = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: "select_account"
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
// export const signInWithGoogleRedirect = () => signInWithRedirect(auth, provider);
export default firebaseApp;