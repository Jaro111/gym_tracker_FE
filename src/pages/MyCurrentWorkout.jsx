import React from "react";
import { useLocation } from "react-router-dom";
import { CurrentWorkout } from "../components/currentWorkout/CurrentWorkout";

export const MyCurrentWorkout = () => {
  const location = useLocation();
  console.log(location);

  const trainingDetails = location.state;
  return <CurrentWorkout trainingDetails={trainingDetails} />;
};
