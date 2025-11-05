// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import {
        getAuth, 
        // signInWithRedirect, 
        signInWithPopup, 
        GoogleAuthProvider ,
        createUserWithEmailAndPassword,
        signInWithEmailAndPassword,
        signOut,
       onAuthStateChanged
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

export const createUserDocumentFromAuth = async function(userAuth, additionalInformation = {}) {
    if(!userAuth) return;
    console.log('user is', userAuth);
    const userDocRef = doc(db, 'users', userAuth.uid);

    const userSnapshot = await getDoc(userDocRef);


    if(!userSnapshot.exists()) {
        console.log('user data does not exists');
      const  {displayName, email} = userAuth;
      const createdAt = new Date();

      try{
          await setDoc(userDocRef,{
              displayName,
              email,
              createdAt,
              ...additionalInformation
          })
      }catch(err){
            console.log('error creating the user', err.message);
      }
    }

    console.log('userSnapshot', userSnapshot);
    return userSnapshot;
}

export const createAuthUserWithEmailAndPassword = async (email, password) => {
    if(!email || !password) return;

    return await createUserWithEmailAndPassword(auth, email, password);
}

export const signInAuthUserWithEmailAndPassword = async (email, password) => {
    if(!email || !password) return;

    return await signInWithEmailAndPassword(auth, email, password);
}

export const signOutUser = async () => await signOut(auth);

export const onAuthStateChangedListener = (callback) => {
    onAuthStateChanged(auth, callback);
}