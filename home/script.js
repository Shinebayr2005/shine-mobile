// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA0Tms-Y64FzDAFztTKe8khHLaDud73mso",
  authDomain: "mobile-legends-bang-bang-29c43.firebaseapp.com",
  projectId: "mobile-legends-bang-bang-29c43",
  storageBucket: "mobile-legends-bang-bang-29c43.appspot.com",
  messagingSenderId: "770625017071",
  appId: "1:770625017071:web:99cfa02cf5bd47b49af71a",
  measurementId: "G-X91NPNP4WP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);