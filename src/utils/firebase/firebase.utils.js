// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { 
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword} from 'firebase/auth';

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

export const createUserDocumentFromAuth = async (userAuth) => {
  const userDocRef = doc(db, 'users', userAuth.uid)

  console.log(userDocRef)

  const userSnapshot = await getDoc(userDocRef)
  console.log(userSnapshot)
  console.log(userSnapshot.exists())

  if(!userSnapshot.exists()){
    const { displayName, email } = userAuth
    const createdAt = new Date()

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt
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