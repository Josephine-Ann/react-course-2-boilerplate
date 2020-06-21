import * as firebase from 'firebase';

var config = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.FIREBASE_DATABASE_URL,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID
  // apiKey: "AIzaSyDjvSnQBMp-ohtSIqNIK6iizsb602x3WwY",
  // authDomain: "flashcard-app-182a6.firebaseapp.com",
  // databaseURL: "https://flashcard-app-182a6.firebaseio.com",
  // projectId: "flashcard-app-182a6",
  // storageBucket: "flashcard-app-182a6.appspot.com",
  // messagingSenderId: "673672469213",
  // appId: "1:673672469213:web:20d6140ecf865dd0ce5934",
  // measurementId: "G-MDETWQP62G"
  };

  console.log(`Database url is :${process.env.FIREBASE_DATABASE_URL}`);

firebase.initializeApp(config);

const database = firebase.database();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { firebase, googleAuthProvider, database as default };

