import React from "react";
import { SignUp } from "./SignUp";
import { LogIn } from "./logIn";
import { useState } from "react";
import "./LogInSignUp.css";

export const LogInSignUp = () => {
  const [isLogInVIsible, setIsLogInVIsible] = useState(false);
  return (
    <div className="logIn-signUp-wrapper">
      {!isLogInVIsible ? (
        <SignUp
          isLogInVIsible={isLogInVIsible}
          setIsLogInVIsible={setIsLogInVIsible}
        />
      ) : (
        <LogIn
          isLogInVIsible={isLogInVIsible}
          setIsLogInVIsible={setIsLogInVIsible}
        />
      )}
    </div>
  );
};
