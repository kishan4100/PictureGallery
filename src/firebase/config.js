import {initializeApp}from "firebase"


// Your web app's Firebase configuration

const firebaseConfig = {
    apiKey: "AIzaSyDv8RfV5bBplw6CGWvIlwgnnD-2rTt1mGU",
    authDomain: "picture-gallery-fd4b2.firebaseapp.com",
    projectId: "picture-gallery-fd4b2",
    storageBucket: "picture-gallery-fd4b2.appspot.com",
    messagingSenderId: "668737262925",
    appId: "1:668737262925:web:fd711b8cca4cdbccd31304"
  };
  
  // Initialize Firebase
  const app =initializeApp(firebaseConfig);

  const projectStorage = app.storage()
  const projectFireStore = app.firestore()
  

  export {projectStorage,projectFireStore  }