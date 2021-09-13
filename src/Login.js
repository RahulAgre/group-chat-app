import React from "react";
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
        <h1>Welcome to Omega Chat Room</h1>
        <h2>Sign In with Google and chat with your friends!!!!</h2>
      </div>
      <Button type="submit" onClick={SignInWithGoogle}>
        Sign In
      </Button>
    </div>
  );
}

export default Login;
