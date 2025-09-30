import React from "react";
import { addTraining } from "../../utils/utilsTraining";
import { useState, useEffect } from "react";
import "./AddTrainingPanel.css";

export const AddTrainingPanel = (props) => {
  //

  const changeHandler = (e) => {
    e.preventDefault();
    props.setTrainingName(e.target.value);
  };

  const createTraining = async () => {
    const training = await addTraining(props.trainingName, props.user.token);
    props.setTrainingId(training.training.id);
  };

  return (
    <div className="createTraining-newTraining-wrapper">
      <input
        placeholder="Training Name"
        className="createTraining-trainingName-input"
        onChange={(e) => changeHandler(e)}
      ></input>
      <button
        className="createTraining-addTraining-button-"
        onClick={createTraining}
      >
        CREATE
      </button>
    </div>
  );
};
