import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
import { getStorage } from "firebase/storage";
import  "firebase/firestore";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyASGfny6SeW-ek9YiUTsnnEEbtxCOMnKQQ",
  authDomain: "olx-1a157.firebaseapp.com",
  projectId: "olx-1a157",
  storageBucket: "olx-1a157.appspot.com",
  messagingSenderId: "1095405836089",
  appId: "1:1095405836089:web:14b1685cdce1a16a377ae8"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const auth = getAuth(firebaseApp);
const db = getFirestore(firebaseApp)
const storage = getStorage(firebaseApp)
export { firebaseApp as firebase, auth ,db,storage};