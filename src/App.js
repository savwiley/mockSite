import React, { useRef, useEffect } from "react";
import { auth } from "./firebase.js";

const App = () => {
  const email = useRef();
  const password = useRef();

  //IF user is already signed in (if firebase even remembers them) then take them straight to the home screen

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
      auth.signInWithEmailAndPassword(email, password)
      .then((userCredential) => {
        const user = userCredential.user;
      })
      .catch((error) => {
        console.log(error.code);
        alert(error.message);
      });
    };

    //SIGN UP
    const signUp = (email, password) => {
      auth.createUserWithEmailAndPassword(email, password)
      .then((userCredential) => {
        const user = userCredential.user;
      })
      .catch((error) => {
        console.log(error.code);
        alert(error.message);
      });
    };

    //SIGN IN ANONYMOUSLY
    const signAnon = () => {
      auth.signInAnonymously()
      .then(() => {
        // Signed in..
      })
      .catch((error) => {
        console.log(error.code);
        alert(error.message);
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
        <h1>Notagram</h1>

        <input type="email" placeholder="Email" className="emailInput" />
        <input type="text" placeholder="Display Name" className="nameInput" />
        <input type="password" placeholder="Password" className="pwInput" />

        <div>
          <input type="button" value="Sign In" className="signInBtn" />
          <span id="inP">Sign In</span>
          <span id="upP">Sign Up</span>
          <input type="button" value="Sign Up" className="signUpBtn" />
        </div>

        <input type="button" value="Sign In Anon" className="signInAnon" />
      </div>

    </div>
  );
}

export default App;

/**
 * #upP event listener makes nameInput, #inP, & signUpBtn appear and signInBtn disappear
 * 
 * #inP event listener makes nameInput, #inP, & signUpBtn disappear and signInBtn appear
 * 
 * Add a break with "OR" before the Anon Btn
 * 
 * Change text in Anon Btn
 */


//for info on func 'user already signed in' AND set up for testing: https://firebase.google.com/docs/auth/web/start

//for info on signing out: https://firebase.google.com/docs/auth/web/password-auth

//for anon info: https://firebase.google.com/docs/auth/web/anonymous-auth