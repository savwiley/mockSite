import React, { useState } from "react";
import PropTypes from "prop-types";
import { ModalLoading } from "../Loading";
import { SwitchScreen } from "./styled";
import { auth } from "../firebase";

// sign in screen
const SignIn = (props) => {
  const { setShown, creds } = props;
  const [loading, setLoading] = useState(false);

  const signIn = (email, password) => {
    auth
      .signInWithEmailAndPassword(email, password)
      .then((/*userCredential*/) => {
        // const user = userCredential.user;
      })
      .catch((error) => {
        console.log(error.code);
        alert(error.message);
      });
  };

  return (
    <>
      {loading && <ModalLoading />}
      <input
        type="button"
        value="Sign In"
        onClick={() => {
          setLoading(true);
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
const SignUp = (props) => {
  const { setShown, creds } = props;
  const [loading, setLoading] = useState(false);

  const signUp = (email, password) => {
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((/*userCredential*/) => {
        // const user = userCredential.user;
      })
      .catch((error) => {
        console.log(error.code);
        alert(error.message);
      });
  };

  return (
    <>
      {loading && <ModalLoading />}
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
          setLoading(true);
          signUp(creds[0], creds[1]);
        }}
      />
    </>
  );
};

SignIn.propTypes = {
  setShown: PropTypes.func,
  creds: PropTypes.array,
};

SignUp.propTypes = {
  setShown: PropTypes.func,
  creds: PropTypes.array,
};

export { SignIn, SignUp };
