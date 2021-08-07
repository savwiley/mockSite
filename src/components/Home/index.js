import React, { useState } from "react";
import { SignInSheet, SignInControls } from "./styled.js";
import { SignIn, SignUp } from "./screen.js";
import { auth } from "../firebase.js";

const Home = () => {
  const [signUpScreen, setSignUpScreen] = useState(false);
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const signAnon = () => {
    auth
      .signInAnonymously()
      .then(() => {
        // Signed in..
      })
      .catch((error) => {
        console.log(error.code);
        alert(error.message);
      });
  };

  return (
    <SignInSheet>
      <h1>Notagram</h1>

      <input
        type="email"
        placeholder="Email"
        onChange={() => {
          setEmail(this.value);
        }}
      />
      <input
        type="password"
        placeholder="Password"
        onChange={() => {
          setPassword(this.value);
        }}
      />

      <SignInControls>
        {!signUpScreen && (
          <SignIn creds={[email, password]} setShown={setSignUpScreen} />
        )}
        {signUpScreen && (
          <SignUp creds={[email, password]} setShown={setSignUpScreen} />
        )}
      </SignInControls>

      <input
        type="button"
        value="Enter Anonymously"
        onClick={() => {
          signAnon();
        }}
      />
    </SignInSheet>
  );
};

export default Home;

//for info on func 'user already signed in' AND set up for testing: https://firebase.google.com/docs/auth/web/start

//for info on signing out: https://firebase.google.com/docs/auth/web/password-auth

//for anon info: https://firebase.google.com/docs/auth/web/anonymous-auth
