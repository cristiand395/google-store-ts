// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { 
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged} from 'firebase/auth';

import { 
  getFirestore,
  doc,
  getDoc,
  setDoc} from 'firebase/firestore';

// My web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDjMBDk0ux9BRjvuXTDAcjat3K703AVgds",
  authDomain: "store-db-d50a5.firebaseapp.com",
  projectId: "store-db-d50a5",
  storageBucket: "store-db-d50a5.appspot.com",
  messagingSenderId: "96667720763",
  appId: "1:96667720763:web:3d29fdaf20ccc45153901e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//Initialize Provider
const googleProvider = new GoogleAuthProvider()
googleProvider.setCustomParameters({
  prompt: 'select_account'
})

export const auth = getAuth()
export const signInWithGooglePopup = () => signInWithPopup(auth, googleProvider)
export const signInWithGoogleRedirect = () => signInWithGoogleRedirect(auth, googleProvider)

export const db = getFirestore()

export const createUserDocumentFromAuth = async (
  userAuth, 
  additionalInformation = {}
) => {
  if (!userAuth) return;

  const userDocRef = doc(db, 'users', userAuth.uid)

  const userSnapshot = await getDoc(userDocRef)

  if(!userSnapshot.exists()){
    const { displayName, email } = userAuth
    const createdAt = new Date()

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        ...additionalInformation,
      })
    } catch(error) {
      console.log('error creating user: ', error.message )
    }
  }
  return userDocRef
} 

export const CreateAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return

  return await createUserWithEmailAndPassword(auth, email, password)
}

export const signInAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return

  return await signInWithEmailAndPassword(auth, email, password)
}

export const signOutUser = () => {
  signOut(auth)
}

export const onAuthStateChangedListener = (callback) => onAuthStateChanged(auth, callback)