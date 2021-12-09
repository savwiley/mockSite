import React, { useState } from "react";
import { SignIn, SignUp } from "./screen";
import { auth } from "../firebase";
import { SignInSheet, SignInControls, Text } from "./styled";

const Home = () => {
  const [signUpScreen, setSignUpScreen] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userName, setUserName] = useState("");

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
      <Text>{signUpScreen ? "Join the Fun!" : "Welcome Back!"}</Text>

      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => {
          setEmail(e.target.value);
        }}
      />
      {signUpScreen && 
        <input
          type="text"
          placeholder="Display Name"
          value={userName}
          onChange={(e) => {
            setUserName(e.target.value);
          }}
        />
      }
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => {
          setPassword(e.target.value);
        }}
      />

      <SignInControls>
        {!signUpScreen && (
          <SignIn creds={[email, password]} setShown={setSignUpScreen} />
        )}
        {signUpScreen && (
          <SignUp creds={[email, password, userName]} setShown={setSignUpScreen} />
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

// for info on func 'user already signed in' AND set up for testing: https://firebase.google.com/docs/auth/web/start

// for info on signing out: https://firebase.google.com/docs/auth/web/password-auth

// for anon info: https://firebase.google.com/docs/auth/web/anonymous-auth
