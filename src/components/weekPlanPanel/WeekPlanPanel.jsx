import React from "react";
import { TrainingOptions } from "../trainingOptions/TrainingOptions";
import { useState } from "react";
import "./WeekPlanPanel.css";

export const WeekPlanPanel = () => {
  //
  const [trainingId, setTrainingId] = useState(null);

  const addTraining = () => {
    console.log(trainingId);
  };
  return (
    <div className="weekPlanPanel-wrapper">
      <p>Week Plan Simulation</p>
      <TrainingOptions trainingId={trainingId} setTrainingId={setTrainingId} />
      <button onClick={addTraining} className="weekPlan-addTraining-btn">
        ADD TO WEEK PLAN
      </button>
    </div>
  );
};
