<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <HelloWorld msg="Welcome to Your Vue.js App" />
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import { initializeApp } from "firebase/app";
import { getMessaging, onMessage, getToken } from "firebase/messaging";

const firebaseConfig = {
  apiKey: "AIzaSyCFU6hxtXLwop3JSRXLWS_0ZMuojT1EbL8",
  authDomain: "front-fcm.firebaseapp.com",
  projectId: "front-fcm",
  storageBucket: "front-fcm.appspot.com",
  messagingSenderId: "873167952503",
  appId: "1:873167952503:web:8c59ec69c1807ff40a4472",
};

const app = initializeApp(firebaseConfig);
const messaging = getMessaging(app);

const requestPermission = () => {
  console.log("Requesting permission...");
  Notification.requestPermission().then((permission) => {
    if (permission === "granted") {
      console.log("Notification permission granted.");

      getToken(messaging, {
        vapidKey:
          "BJp9B3wupqL2yMk-F-lvKkw6vyfOmY8ypbkJl9P1MJewXBwcQES-Oomatk-G1qeFOUBiaSFcVyv5TmlEAtCVmfU",
      })
        .then((currentToken) => {
          if (currentToken) {
            // Send the token to your server and update the UI if necessary
            console.log(currentToken);
          } else {
            // Show permission request UI
            console.log(
              "No registration token available. Request permission to generate one."
            );
            // ...
          }
        })
        .catch((err) => {
          console.log("An error occurred while retrieving token. ", err);
          // ...
        });
    }
  });
};

requestPermission();
onMessage(messaging, (payload) => {
  console.log("Message received. ", payload);
  // ...
});

export default {
  name: "App",
  components: {
    HelloWorld,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
