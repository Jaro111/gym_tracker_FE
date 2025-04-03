import React from "react";
import { useState } from "react";
import "./LogIn.css";

export const LogIn = (props) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const changeHandler = (e, setter) => {
    setter(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(username, password);
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
        Sign Up
      </p>
    </div>
  );
};
