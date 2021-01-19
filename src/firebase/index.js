import firebase from "firebase/app";
import "@firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA75jJVsUcr8Bpi4tLOkT8bw4iR_Tb1_0s",
  authDomain: "moli-bcc95.firebaseapp.com",
  projectId: "moli-bcc95",
  storageBucket: "moli-bcc95.appspot.com",
  messagingSenderId: "319370138380",
  appId: "1:319370138380:web:f12546f18dea6cfbdaaf29",
  measurementId: "G-X4EC72DVBJ",
};
// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);

export function getFirebase() {
  return app;
}

export function getFirestore() {
  return firebase.firestore(app);
}
