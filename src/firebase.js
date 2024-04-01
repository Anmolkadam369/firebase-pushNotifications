import { initializeApp } from "firebase/app";
import { getMessaging } from "firebase/messaging";

const firebaseConfig = {
    apiKey: "AIzaSyDVoCPjnHeVwhXGS6e2TecybfRA5kO47BM",
    authDomain: "firstfirebaseproject-c676f.firebaseapp.com",
    projectId: "firstfirebaseproject-c676f",
    storageBucket: "firstfirebaseproject-c676f.appspot.com",
    messagingSenderId: "490386883552",
    appId: "1:490386883552:web:629d36e63e41982abce185",
    measurementId: "G-R45S0BBB9B"
  };

  export const app = initializeApp(firebaseConfig);
  export const messaging = getMessaging(app);
