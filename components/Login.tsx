import React from "react";
import { Button } from "react-bootstrap";
import { auth, firebase } from "./Firebase";

export default function Login(): JSX.Element {
  async function googleLogin(): Promise<void> {
    // 1 - init Google Auth Provider
    const provider = new firebase.auth.GoogleAuthProvider();
    // 2 - create the popup signIn
    await auth.signInWithPopup(provider).then(async (result) => {
      const user = auth.currentUser;
      // token generated
      const token = user && (await user.getIdToken());
    });
  }
  return (
    <div>
      <Button onClick={googleLogin} className="login-button">
        Log in with Google
      </Button>
    </div>
  );
}