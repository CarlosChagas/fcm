// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getMessage } from "firebase-messaging"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCFU6hxtXLwop3JSRXLWS_0ZMuojT1EbL8",
    authDomain: "front-fcm.firebaseapp.com",
    projectId: "front-fcm",
    storageBucket: "front-fcm.appspot.com",
    messagingSenderId: "873167952503",
    appId: "1:873167952503:web:8c59ec69c1807ff40a4472"
};

// Initialize Firebase
 const app = initializeApp(firebaseConfig);
  const messaging = getMessage(app);

  export default {
    app: app,
    messaging: messaging
  }