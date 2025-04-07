import React from "react";
import { useState } from "react";
import "./AddTrainingPanel.css";

export const AddTrainingPanel = (props) => {
  //

  return (
    <div className="createTraining-newTraining-wrapper">
      <input
        placeholder="Training Name"
        className="createTraining-trainingName-input"
      ></input>
      <button className="createTraining-addTraining-button-">CREATE</button>
    </div>
  );
};
