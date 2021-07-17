import firebase from "firebase/app";
import "firebase/analytics";
import "firebase/auth";
import "firebase/firestore";

export const firebase = () => {
  var firebaseConfig = {
    apiKey: "AIzaSyB-JKYulXp-U7j5kb1x5GLbBhNoBGxu9eg",
    authDomain: "mockproject-881e2.firebaseapp.com",
    projectId: "mockproject-881e2",
    storageBucket: "mockproject-881e2.appspot.com",
    messagingSenderId: "611945416123",
    appId: "1:611945416123:web:ad1c5efc3401533862f09e",
    measurementId: "G-DJRCEY9QSQ"
  };

  // Initialize the FirebaseUI Widget using Firebase.
  var ui = new firebaseui.auth.AuthUI(firebase.auth());
  ui.start('#firebaseui-auth-container', {
    signInOptions: [
      firebase.auth.EmailAuthProvider.PROVIDER_ID
    ],
  });

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
}

/*
export const firebaseUI = () => {
  // Initialize the FirebaseUI Widget using Firebase.
  var ui = new firebaseui.auth.AuthUI(firebase.auth());
  ui.start('#firebaseui-auth-container', {
    signInOptions: [
      firebase.auth.EmailAuthProvider.PROVIDER_ID
    ],
  });
}
*/

// https://firebase.google.com/docs/auth/web/firebaseui