import React from "react";
// import { getAllTrainings } from "../../utils/utilsTraining";
import { TrainingOptions } from "../trainingOptions/TrainingOptions";
import { AddTrainingPanel } from "./AddTrainingPanel";
import { AddExerciseTemplatePanel } from "../addExerciseTemplate/AddExerciseTemplate";
import { userContext } from "../../common/context";
import { useState, useEffect, useContext } from "react";
import "./CreateTrainingPanel.css";

export const CreateTrainingPanel = () => {
  //
  const [trainingId, setTrainingId] = useState(null);
  const [trainingName, setTrainingName] = useState(null);

  const user = useContext(userContext).user;
  const handleFetch = () => {
    fetchTrainings(user.token);
  };

  useEffect(() => {
    // console.log(trainingId);
  }, [user.token]);

  //
  return (
    <div className="createTraining-wrapper">
      <AddTrainingPanel
        setTrainingId={setTrainingId}
        trainingName={trainingName}
        setTrainingName={setTrainingName}
        user={user}
      />
      <TrainingOptions trainingId={trainingId} setTrainingId={setTrainingId} />
      <AddExerciseTemplatePanel trainingId={trainingId} />
    </div>
  );
};
