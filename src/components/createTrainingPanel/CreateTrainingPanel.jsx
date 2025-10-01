import React from "react";
import { getTraining } from "../../utils/utilsTraining";
import { TrainingOptions } from "../trainingOptions/TrainingOptions";
import { AddTrainingPanel } from "./AddTrainingPanel";
import { AddExerciseTemplatePanel } from "../addExerciseTemplate/AddExerciseTemplate";
import { TrainingColors } from "./TrainingColors";
import { userContext } from "../../common/context";
import { useState, useEffect, useContext } from "react";
import "./CreateTrainingPanel.css";

export const CreateTrainingPanel = (props) => {
  //
  const [trainingId, setTrainingId] = useState(null);
  const [trainingName, setTrainingName] = useState(null);
  const [mainColor, setMainColor] = useState("");

  const user = useContext(userContext).user;
  const getTrainingById = async () => {
    const data = await getTraining(user.token, trainingId);
    setMainColor(data.training.color);
  };

  useEffect(() => {
    if (trainingId && user.token) {
      getTrainingById();
    }
  }, [user.token, trainingId, mainColor]);

  //
  return (
    <div className="createTraining-wrapper">
      <AddTrainingPanel
        setTrainingId={setTrainingId}
        trainingName={trainingName}
        setTrainingName={setTrainingName}
        user={user}
      />
      <div className="createTraining-trainingOptions-wrapper">
        <TrainingOptions
          trainingId={trainingId}
          setTrainingId={setTrainingId}
        />
        <TrainingColors
          mainColor={mainColor}
          setMainColor={setMainColor}
          trainingId={trainingId}
        />
      </div>

      <AddExerciseTemplatePanel trainingId={trainingId} />
    </div>
  );
};
