import React from "react";
import { getAllTrainingDays } from "../../utils/trainingDay";
import { getDate } from "../../common/functions";
import { TrainingDatePanel } from "./TrainingDatePanel";
import { userContext } from "../../common/context";
import { useState, useEffect, useContext } from "react";
import "./CurrentWorkout.css";

export const CurrentWorkout = (props) => {
  //
  const user = useContext(userContext).user;
  const [trainingDaysArray, setTrainingDaysArray] = useState([]);
  const [trainingDay, setTrainingDay] = useState("");

  const { trainingDetails, dateNow } = props;
  const dateToday = getDate(dateNow.year, dateNow.month, dateNow.day);

  const getAllDays = async () => {
    const data = await getAllTrainingDays(user.token);
    setTrainingDaysArray(data.trainingDays);
  };
  //
  useEffect(() => {
    if (user.token) {
      getAllDays();
    }
  }, [user.token]);
  //
  return (
    <div className="currentWorkout-wrapper">
      <TrainingDatePanel
        trainingDaysArray={trainingDaysArray}
        setTrainingDaysArray={setTrainingDaysArray}
        trainingDay={trainingDay}
        setTrainingDay={setTrainingDay}
      />
    </div>
  );
};
