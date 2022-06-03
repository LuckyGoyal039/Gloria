// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyBPg9v6r_zk1UeMwqtS1tqdZ54L_1mqlSc",
//   authDomain: "demooo-1ba85.firebaseapp.com",
//   projectId: "demooo-1ba85",
//   storageBucket: "demooo-1ba85.appspot.com",
//   messagingSenderId: "316806678596",
//   appId: "1:316806678596:web:2c347ec55540376c415411",
//   measurementId: "G-ZEHY2VMBJ1"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

import {initializeApp} from 'firebase/app';
import {getAuth} from 'firebase/auth';

const app=initializeApp({

  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
  measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID
})

export const auth=getAuth(app);
export default app;