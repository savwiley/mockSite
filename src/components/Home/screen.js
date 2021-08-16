import React from 'react';
import { SwitchScreen } from './styled';
import { auth } from '../firebase';

// sign in screen
export const SignIn = (props) => {
  const { setShown, creds } = props;

  const signIn = (email, password) => {
    auth
      .signInWithEmailAndPassword(email, password)
      .then((userCredential) => {
        // const user = userCredential.user;
      })
      .catch((error) => {
        console.log(error.code);
        alert(error.message);
      });
  };

  return (
    <>
      <input
        type="button"
        value="Sign In"
        onClick={() => {
          signIn(creds[0], creds[1]);
        }}
      />
      <SwitchScreen
        onClick={() => {
          setShown(true);
        }}
      >
        Sign Up
      </SwitchScreen>
    </>
  );
};

// sign up screen
export const SignUp = (props) => {
  const { setShown, creds } = props;

  const signUp = (email, password) => {
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((userCredential) => {
        // const user = userCredential.user;
      })
      .catch((error) => {
        console.log(error.code);
        alert(error.message);
      });
  };

  return (
    <>
      <SwitchScreen
        onClick={() => {
          setShown(false);
        }}
      >
        Sign In
      </SwitchScreen>
      <input
        type="button"
        value="Sign Up"
        onClick={() => {
          signUp(creds[0], creds[1]);
        }}
      />
    </>
  );
};
