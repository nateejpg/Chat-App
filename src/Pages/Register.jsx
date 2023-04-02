import React, { useState, useEffect } from "react";
import Data from "../Data";
import add from "../images/addavatar.png";

function Register() {
  const [url, setUrl] = useState("");

  function RandomImage() {
    useEffect(() => {
      const randomURL =
        Data.imgs[Math.floor(Math.random() * Data.imgs.length)].url;
      setUrl(randomURL);
    }, []);

    return <img src={url} alt="Random" />;
  }

  return (
    <div className="AdressContainer">
      <div className="imgContainer">
        <RandomImage />
      </div>
      <div className="formContainer">
        <h1 className="logo">TalkNow</h1>
        <span className="title">Register</span>
        <form>
          <input placeholder="Display Name" type="name"></input>
          <input placeholder="Email" type="email"></input>
          <input placeholder="Password" type="password"></input>
          <input type="file" style={{ display: "none" }} id="file"></input>
          <label htmlFor="file">
            <img src={add} alt=""></img>
            <p>Add an avatar</p>
          </label>
          <button>Sign Up</button>
        </form>
        <p>
          You do have an account?<span>Login</span>
        </p>
      </div>
    </div>
  );
}

export default Register;
