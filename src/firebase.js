import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAlQmYPT5eSsdwbGXHvSoldA2PBSoHjryM",
  authDomain: "clone-c48f2.firebaseapp.com",
  databaseURL: "https://clone-c48f2.firebaseio.com",
  projectId: "clone-c48f2",
  storageBucket: "clone-c48f2.appspot.com",
  messagingSenderId: "1039354805041",
  appId: "1:1039354805041:web:2c142945c26859d8750e10",
  measurementId: "G-VM6QHS6NHY",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
