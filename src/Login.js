import React from "react";
import "./Login.css";
import { Button } from "@material-ui/core";
// eslint-disable-next-line no-unused-vars
import { auth, provider } from "./firebase";

function Login() {
  const SignInWithGoogle = () => {
    auth.signInWithPopup(provider);
  };
  return (
    <div className="login">
      <div className="login__body">
        <div className="login__header">
          <h1>ΦMEGA</h1>
        </div>
        <div className="header--fadeBottom" />
        <Button type="submit" onClick={SignInWithGoogle}>
          Sign In
        </Button>
        <div className="login__footer">
          <h2>Sign In with Google and chat with your friends!!!!</h2>
        </div>
      </div>
    </div>
  );
}

export default Login;
