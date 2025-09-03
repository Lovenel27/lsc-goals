
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCq7NYw2DcQY0zudNrwpmZxKC4m_iH1KiY",
  authDomain: "lsc-goals.firebaseapp.com",
  projectId: "lsc-goals",
  storageBucket: "lsc-goals.firebasestorage.app",
  messagingSenderId: "493458421040",
  appId: "1:493458421040:web:874c49d538f845550284f5"
};


const app = initializeApp(firebaseConfig);
export  const db = getFirestore(app)