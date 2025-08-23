// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import {
        getAuth, 
        // signInWithRedirect, 
        signInWithPopup, 
        GoogleAuthProvider 
      } from "firebase/auth";

import {
        getFirestore,
        doc,
        getDoc,
        setDoc
       } from  "firebase/firestore";

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

export const db =  getFirestore();

export const createUserDocumentFromAuth = async function(userAuth) {
    console.log('user is', userAuth);
    const userDocRef = doc(db, 'users', userAuth.uid);

    console.log(userDocRef);
    const userSnapshot = await getDoc(userDocRef);

    console.log('does it exists',userSnapshot.exists());

    if(!userSnapshot.exists()) {
        console.log('user data does not exists');
      const  {displayName, email} = userAuth;
      const createdAt = new Date();

      try{
          await setDoc(userDocRef,{
              displayName,
              email,
              createdAt
          })
      }catch(err){
            console.log('error creating the user', err.message);
      }
    }

    return userSnapshot
}