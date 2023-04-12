// Import the functions you need from the SDKs you need
import { FirebaseApp, initializeApp } from "firebase/app";
import { doc, setDoc, collection, CollectionReference, DocumentData, Firestore, getDocs, getFirestore, getDocFromCache, getDoc, query, where } from "firebase/firestore";
import { getDatabase, ref, onValue} from "firebase/database";

import driver from "../../interfaces/driver";
//import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAXaYSxITLCtPgMciYnhRXAfgBugCgHO8M",
  authDomain: "escola-cf86d.firebaseapp.com",
  projectId: "escola-cf86d",
  storageBucket: "escola-cf86d.appspot.com",
  messagingSenderId: "957563083416",
  appId: "1:957563083416:web:5f85181fd15129e9364eed",
  measurementId: "G-RQ1F34F2GS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);

const db = getFirestore(app);


const l = [
   where("capital", "==", true),
   where("name", "==", 'Tokyo')
]

const q = query(collection(db, "cities"), ...l);

getDocs(q)
.then(querySnapshot =>
querySnapshot.forEach((doc) => {
  // doc.data() is never undefined for query doc snapshots
  console.log(doc.id, " => ", doc.data());
}));