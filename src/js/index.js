//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

//include your index.scss file into the bundle
import "../styles/index.css";

//import your own components
import Layout from "./layout";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey:process.env.apiKey,
    authDomain:process.env.authDomain,
    projectId:process.env.projectId,
    storageBucket:process.env.storageBucket,
    messagingSenderId:process.env.messagingSenderId,
    appId:process.env.apiKey,
    measurementId:process.env.apiKey,
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
  const auth = getAuth(app);



//render your react application
ReactDOM.render(<Layout />, document.querySelector("#app"));




// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

