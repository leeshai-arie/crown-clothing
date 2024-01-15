// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";

import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDwxSfgp0QzW23VmJeq41LqRnU86O8pw-U",
  authDomain: "crwn-clothing-db-49878.firebaseapp.com",
  projectId: "crwn-clothing-db-49878",
  storageBucket: "crwn-clothing-db-49878.appspot.com",
  messagingSenderId: "952961428548",
  appId: "1:952961428548:web:af2b6a0a129f2e8d3e2011",
};

// Initialize Firebase
// eslint-disable-next-line
const firebaseApp = initializeApp(firebaseConfig);

// Set google provider
const provider = new GoogleAuthProvider();
// Set custom parmaters
provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

// Initialize FireStore
const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
  const userDocRef = doc(db, "users", userAuth.uid);

  console.log(userDocRef);

  const userSnapshot = await getDoc(userDocRef);
  console.log(userSnapshot);
};
