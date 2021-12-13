import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want



const config = {

  apiKey: "AIzaSyCcsv5EYGS6HPudCHOju1qcnpdXrdSvoJU",

  authDomain: "ecommerce-db-80115.firebaseapp.com",

  projectId: "ecommerce-db-80115",

  storageBucket: "ecommerce-db-80115.appspot.com",

  messagingSenderId: "87722815506",

  appId: "1:87722815506:web:53ba29be81cbad57c568cb",

  measurementId: "G-6MXW9BBP7T"

}

initializeApp(config);

export const auth = getAuth();
export const firestore = getFirestore();

const provider = new GoogleAuthProvider();
provider.setCustomParameters({ params: "select_account" });
export const signInWithGoogle = () => signInWithPopup(auth, provider);
