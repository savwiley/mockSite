import React, { useRef, useEffect } from "react";
import firebase from "./firebase";
//import firebaseUI from "./firebase";

const App = () => {
  const email = useRef();
  const password = useRef();

  //Changes useRef
  useEffect(() => {
    const emailInput = document.querySelector(".emailInput");
    const pwInput = document.querySelector(".pwInput");

    emailInput.addEventListener("change", () => {
      email.current = emailInput.value;
    })
    pwInput.addEventListener("change", () => {
      password.current = pwInput.value;
    })
  });

  //Btns & Firebase
  useEffect(() => {
    const signInBtn = document.querySelector(".signInBtn");
    const signUpBtn = document.querySelector(".signUpBtn");
    const signInAnon = document.querySelector(".signInAnon");

    //SIGN IN
    const signIn = (email, password) => {
      firebase.auth().signInWithEmailAndPassword(email, password)
      .then((userCredential) => {
        // Signed in
        var user = userCredential.user;
        // ...
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
      });
    };

    //SIGN UP
    const signUp = (email, password) => {
      firebase.auth().createUserWithEmailAndPassword(email, password)
      .then((userCredential) => {
        // Signed in 
        var user = userCredential.user;
        // ...
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        // ..
      });
    };

    //SIGN IN ANONYMOUSLY
    const signAnon = () => {
      firebase.auth().signInAnonymously()
      .then(() => {
        // Signed in..
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        // ...
      });
    }

    signInBtn.addEventListener("click", () => {
      signIn(email.current, password.current);
    });
    signUpBtn.addEventListener("click", () => {
      signUp(email.current, password.current);
    });
    signInAnon.addEventListener("click", signAnon);
  });





  return (
    <div className="home">

      <div id="firebaseui-auth-container" className="signInSheet">
        <input type="email" placeholder="Email" className="emailInput" />
        <input type="password" placeholder="Password" className="pwInput" />
        <input type="button" value="Sign In" className="signInBtn" />
        <input type="button" value="Sign Up" className="signUpBtn" />

        <input type="button" value="Sign In Anon" className="signInAnon" />
      </div>

    </div>
  );
}

export default App;



//for info on func 'user already signed in' AND set up for testing: https://firebase.google.com/docs/auth/web/start

//for info on signing out: https://firebase.google.com/docs/auth/web/password-auth

//for anon info: https://firebase.google.com/docs/auth/web/anonymous-auth