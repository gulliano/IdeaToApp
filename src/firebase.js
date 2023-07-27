// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "@firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCAFUxjgdYLtX0AZCNbA85Slvya87sNcPI",
  authDomain: "idea-to-app.firebaseapp.com",
  projectId: "idea-to-app",
  storageBucket: "idea-to-app.appspot.com",
  messagingSenderId: "956857020218",
  appId: "1:956857020218:web:59403c68cb4325f65aea03",
  measurementId: "G-CZZRSZE74G"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const firestore = getFirestore(app)