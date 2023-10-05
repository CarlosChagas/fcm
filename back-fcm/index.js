import express, { Router } from 'express';
import admin from "firebase-admin";

const app = express()

app.use(express.json())
const route = Router()
import serviceAccount from "./front-fcm-service-account.json" assert {type: 'json'}

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
})

// Define the message payload
let payload = {
  notification: {
    title: "Título da notificação",
    body: "Mensagem de notificação"
  },
  token: "eGJWm35TdKRwY9AaPukRmz:APA91bHuA5-g3gn1RbIXSUjHy4qZhgb7s16iBDPw2m9-EUfm6ZuXqMexhtM74-avmNHQUOvVDCGw7cyZh0nq2DqC4xaele-rLNOqh6BRoDBWsrwjwgYM-NDje4HZSfgWZvMeRxPhgAkE"
}
;

// Send a message to the condition with the provided payload
admin.messaging().send(payload)
  .then(function(response) {
    console.log("Successfully sent message! Server response:", response);
  })
  .catch(function(error) {
    console.log("Error sending message:", error);
  }); 


app.listen(8080, ()=>{
    console.log("init server!!!!");
})