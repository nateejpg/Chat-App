import React, { useState, useEffect } from "react";
import Data from "../Data";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

function RandomImage() {
  const [url, setUrl] = useState("");

  useEffect(() => {
    const randomUrl =
      Data.imgs[Math.floor(Math.random() * Data.imgs.length)].url;
    setUrl(randomUrl);
  }, []);

  return <img src={url}></img>;
}

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const signIn = () => {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
        alert("User has succesfully signed in!");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(errorCode);
      });
  };

  return (
    <div className="WelcomeContainer">
      <div className="imgContainer">
        <RandomImage />
      </div>
      <div className="formContainer">
        <h1 className="logo">TalkNow</h1>
        <span className="title">Login</span>
        <div className="form">
          <input
            placeholder="Email"
            type="email"
            onChange={(e) => setEmail(e.target.value)}
          ></input>
          <input
            placeholder="Password"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          ></input>
          <input type="file" style={{ display: "none" }} id="file"></input>
          <button onClick={signIn}>Log In</button>
        </div>
        <p>
          You do not have an account? <span>Register</span>
        </p>
      </div>
    </div>
  );
}

export default Login;
