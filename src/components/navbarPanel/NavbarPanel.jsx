import React from "react";
import { NavLink } from "react-router-dom";
import "./NavbarPanel.css";

export const NavbarPanel = () => {
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
        <NavLink className="nav-link" to="/register">
          Log In
        </NavLink>
      </div>
    </div>
  );
};
