import React from "react";

const Register = () => {
  return (
    <div className="formContainer">
      <div className="formWrapper">
        <span className="logo">TalkNow</span>
        <span className="title">Register</span>
        <form>
          <input placeholder="Display Name" type="name"></input>
          <input placeholder="Email" type="email"></input>
          <input placeholder="Password" type="password"></input>
          <input type="File"></input>
          <button>Sign Up</button>
        </form>
        <p>You do have an accout? Login</p>
      </div>
    </div>
  );
};

export default Register;
