import React from "react";
import { logIn } from "../../utils/utilsUser";
import { useState, useContext } from "react";
import { userContext } from "../../common/context";
import { useNavigate } from "react-router-dom";
import "./LogIn.css";

export const LogIn = (props) => {
  //
  const setUser = useContext(userContext).setUser;
  //
  const navigate = useNavigate();
  //
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const changeHandler = (e, setter) => {
    setter(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = await logIn(username, password);
    setUser(data);
    navigate("/");
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
          Log In
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
