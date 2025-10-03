import React from "react";
import { useLocation } from "react-router-dom";
import { CurrentWorkout } from "../components/currentWorkout/CurrentWorkout";

export const MyCurrentWorkout = (props) => {
  const location = useLocation();

  const { dateNow } = props;

  const trainingDetails = location.state;
  return <CurrentWorkout trainingDetails={trainingDetails} dateNow={dateNow} />;
};
