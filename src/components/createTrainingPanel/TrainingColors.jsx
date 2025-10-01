import React from "react";
import { colors } from "../../data/monthsWeekdays";
import { useState } from "react";
import "./TrainingColors.css";

export const TrainingColors = (props) => {
  return (
    <div className="trainingColors-wrapper">
      <div
        style={{ backgroundColor: props.mainColor }}
        className="trainingColors-mainColor"
      ></div>
    </div>
  );
};
