// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBoSMp5cPcTw4YDIXiIZhgw75bfX-Ly5Wc",
  authDomain: "realtor-clone-react-bbd68.firebaseapp.com",
  projectId: "realtor-clone-react-bbd68",
  storageBucket: "realtor-clone-react-bbd68.appspot.com",
  messagingSenderId: "1092807554977",
  appId: "1:1092807554977:web:51e2b7d3ac685f69007de0"
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore()