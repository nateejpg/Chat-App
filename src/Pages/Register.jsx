import React, { useState, useEffect } from "react";
import Data from "../Data";
import add from "../images/addavatar.png";
import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import app from "../firebase";

function RandomImage() {
  const [url, setUrl] = useState("");

  useEffect(() => {
    const randomURL =
      Data.imgs[Math.floor(Math.random() * Data.imgs.length)].url;
    setUrl(randomURL);
  }, []);

  return <img src={url} alt="Random" />;
}

function Register() {
  const auth = getAuth(app);

  const [displayName, setDisplayName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [file, setFile] = useState("");

  const signUp = () => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
        updateProfile(user, {
          displayName: displayName,
        })
          .then(() => {
            console.log("Display Name set to:", displayName);
            alert("succesfully created an account");
          })
          .catch((error) => {
            console.error("Error setting Name:", error);
          });
      })
      .catch((error) => {
        const errorCode = error.code;
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
        <span className="title">Register</span>
        <div className="form">
          <input
            placeholder="Display Name"
            type="name"
            onChange={(e) => setDisplayName(e.target.value)}
          ></input>
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
          <input
            type="file"
            style={{ display: "none" }}
            id="file"
            onChange={(e) => setFile(e.target.value)}
          ></input>
          <label htmlFor="file">
            <img src={add} alt=""></img>
            <p>Add an avatar</p>
          </label>
          <button onClick={signUp}>Sign Up</button>
        </div>
        <p>
          You do have an account?<span>Login</span>
        </p>
      </div>
    </div>
  );
}

export default Register;
