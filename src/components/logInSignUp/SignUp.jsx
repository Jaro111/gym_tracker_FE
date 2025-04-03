import React from "react";
import { useState } from "react";
import "./SignUp.css";

export const SignUp = (props) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const changeHandler = (e, setter) => {
    setter(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(username, email, password);
  };

  return (
    <div className="signUp-wrapper">
      <form onSubmit={handleSubmit} className="signUpForm">
        <input
          onChange={(e) => changeHandler(e, setUsername)}
          placeholder="username"
          className="sign-input"
        ></input>
        <input
          onChange={(e) => changeHandler(e, setEmail)}
          placeholder="email"
          className="sign-input"
        ></input>
        <input
          onChange={(e) => changeHandler(e, setPassword)}
          placeholder="password"
          className="sign-input"
        ></input>
        <button type="submit" className="signButton">
          Sign Up
        </button>
      </form>
      <p
        onClick={() => {
          props.setIsLogInVIsible(!props.isLogInVIsible);
        }}
        className="toggleLogIn-link"
      >
        Log In
      </p>
    </div>
  );
};
