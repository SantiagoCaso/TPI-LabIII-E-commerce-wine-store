// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { doc, getDoc, getFirestore } from "firebase/firestore";
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
export const firebaseConfig = {
  apiKey: "AIzaSyCp8ZFp7sHnpZ8y8kwTGSRBdCioMXC37Nw",
  authDomain: "winestore.firebaseapp.com",
  projectId: "winestore",
  storageBucket: "winestore.appspot.com",
  messagingSenderId: "228339243771",
  appId: "1:228339243771:web:88cb6e47f72dc13956ae5e",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);

export async function userExists(uid) {
  const docRef = doc(db, "user", uid);
  const respuesta = await getDoc(docRef);
  console.log(respuesta);
  return respuesta.exists();
}
