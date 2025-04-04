import React from "react";
import { userContext } from "../../common/context";
import { useContext, useEffect } from "react";
import { NavLink } from "react-router-dom";
import "./NavbarPanel.css";

export const NavbarPanel = () => {
  const setUser = useContext(userContext).setUser;
  const user = useContext(userContext).user;

  //
  const logOut = () => {
    setUser({});
    document.cookie =
      "jwt-token=; expires= Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
  };
  //

  //
  return (
    <div className="navbarPanel-wrapper">
      <div className="nav-link-wrapper">
        <NavLink className="nav-link" to="/">
          Calendar
        </NavLink>
        <NavLink className="nav-link" to="/createTraining">
          Create Training
        </NavLink>
        <NavLink className="nav-link" to="/weekPlanPage">
          Week Plan
        </NavLink>
        <NavLink className="nav-link" to="/myCurrentWorkout">
          Current Workout
        </NavLink>
        <NavLink className="nav-link" to="/SchedulePage">
          Schedule
        </NavLink>
        {!user.username ? (
          <NavLink className="nav-link" to="/register">
            Log In
          </NavLink>
        ) : (
          <p onClick={logOut} className="log-out-link">
            Log Out
          </p>
        )}
      </div>
    </div>
  );
};
