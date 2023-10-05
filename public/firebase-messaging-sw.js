
importScripts('https://www.gstatic.com/firebasejs/8.10.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.10.1/firebase-messaging.js');

firebase.initializeApp({
    apiKey: "AIzaSyCFU6hxtXLwop3JSRXLWS_0ZMuojT1EbL8",
    authDomain: "front-fcm.firebaseapp.com",
    projectId: "front-fcm",
    storageBucket: "front-fcm.appspot.com",
    messagingSenderId: "873167952503",
    appId: "1:873167952503:web:8c59ec69c1807ff40a4472",
});


const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
    console.log(
      '[firebase-messaging-sw.js] Received background message ',
      payload
    );
    // Customize notification here
    const notificationTitle = 'Background Message Title';
    const notificationOptions = {
      body: 'Background Message body.',
      icon: '/firebase-logo.png'
    };
  
    self.registration.showNotification(notificationTitle, notificationOptions);
  });