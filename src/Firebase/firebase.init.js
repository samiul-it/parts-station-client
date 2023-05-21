// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import {getAuth} from "firebase/auth";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_apiKey,
  authDomain: process.env.REACT_APP_authDomain,
  projectId: process.env.REACT_APP_projectId,
  storageBucket: process.env.REACT_APP_storageBucket,
  messagingSenderId: process.env.REACT_APP_messagingSenderId,
  appId: process.env.REACT_APP_appId,
};

// const firebaseConfig = {
//   apiKey: "AIzaSyAT4KtAX2ctjNisnWsrMj-iUWP-Q0PxE7k",
//   authDomain: "parts-station.firebaseapp.com",
//   projectId: "parts-station",
//   storageBucket: "parts-station.appspot.com",
//   messagingSenderId: "292269408748",
//   appId: "1:292269408748:web:927f39fd9886d2ea8a40c9"
// };

console.log(process.env.REACT_APP_apiKey);

// Initialize Firebase
const app = initializeApp(firebaseConfig);


const auth=getAuth(app);

export default auth;