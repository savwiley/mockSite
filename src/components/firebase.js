import firebase from "firebase/app";
import "firebase/analytics";
import "firebase/auth";
import "firebase/storage";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB-JKYulXp-U7j5kb1x5GLbBhNoBGxu9eg",
  authDomain: "mockproject-881e2.firebaseapp.com",
  projectId: "mockproject-881e2",
  storageBucket: "mockproject-881e2.appspot.com",
  messagingSenderId: "611945416123",
  appId: "1:611945416123:web:ad1c5efc3401533862f09e",
  measurementId: "G-DJRCEY9QSQ",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export default firebase;
