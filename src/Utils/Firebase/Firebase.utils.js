import {initializeApp} from "firebase/app";
import {getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider} from 'firebase/auth';
import {getFirestore, doc, getDoc, setDoc} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCwT3xs8AxA6THjR8gP4KZIPkuNew8gHaQ", //documentation states this is ok to have here
  authDomain: "store-db-12b76.firebaseapp.com",
  projectId: "store-db-12b76",
  storageBucket: "store-db-12b76.appspot.com",
  messagingSenderId: "33225028288",
  appId: "1:33225028288:web:6ca19fe402dd1bf9207325",
};

// Initialize Firebase

const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: "select_account"
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
  const userDocRef = doc(db, 'users', userAuth.uid);
  console.log(userDocRef);

  const userSnapshot = await getDoc(userDocRef);
  console.log(userSnapshot)
};