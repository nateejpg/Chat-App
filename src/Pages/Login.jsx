import React, { useState, useEffect } from "react";
import Data from "../Data";

function Login() {
  const [url, setUrl] = useState("");

  function RandomImage() {
    useEffect(() => {
      const randomUrl =
        Data.imgs[Math.floor(Math.random() * Data.imgs.length)].url;
      setUrl(randomUrl);
    }, []);

    return <img src={url}></img>;
  }

  return (
    <div className="Container">
      <div className="imgContainer">
        <RandomImage />
      </div>
      <div className="formContainer">
        <h1 className="logo">TalkNow</h1>
        <span className="title">Login</span>
        <form>
          <input placeholder="Email" type="email"></input>
          <input placeholder="Password" type="password"></input>
          <input type="file" style={{ display: "none" }} id="file"></input>
          <button>Log In</button>
        </form>
        <p>
          You do not have an account? <span>Register</span>
        </p>
      </div>
    </div>
  );
}

export default Login;
