// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBTNW93xxNyQ2G4TKDzzrCaeL-kMu5aWBI",
  authDomain: "react-dragon-news-auth-ca5a8.firebaseapp.com",
  projectId: "react-dragon-news-auth-ca5a8",
  storageBucket: "react-dragon-news-auth-ca5a8.appspot.com",
  messagingSenderId: "371714817714",
  appId: "1:371714817714:web:8be71680bbd2dc315b53ab"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;