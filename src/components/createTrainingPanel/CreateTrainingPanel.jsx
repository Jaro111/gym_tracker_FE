import React from "react";
import { getAllTrainings } from "../../utils/utilsTraining";
import { AddTrainingPanel } from "./AddTrainingPanel";
import { AddExercisePanel } from "./AddExercisePanel";
import { userContext } from "../../common/context";
import { useState, useEffect, useContext } from "react";
import "./CreateTrainingPanel.css";

export const CreateTrainingPanel = () => {
  //
  const [trainings, setTrainings] = useState([]);
  // const [trainingsLength, setTrainingsLength] = useState(0);
  const [trainingId, setTrainingId] = useState(null);
  const [trainingName, setTrainingName] = useState(null);
  const [trainingOptionName, setTrainingOptionName] = useState("");
  const [exerciseId, setExerciseId] = useState(null);

  const user = useContext(userContext).user;

  const fetchTrainings = async (jwt) => {
    if (user.token) {
      const trainings = await getAllTrainings(jwt);
      // console.log(trainings);
      setTrainings(trainings.trainings || []);
      if (!trainingId) {
        setTrainingId(trainings.trainings[0].id);
      }
    }
    // console.log("TrainingId", trainingId);
  };
  //
  const selectTraining = (e) => {
    const item = e.target.value;
    setTrainingId(item);
  };
  //
  useEffect(() => {
    fetchTrainings(user.token);
    // console.log(trainingId);
  }, [user.token, trainingId]);

  //
  return (
    <div className="createTraining-wrapper">
      <AddTrainingPanel
        setTrainingId={setTrainingId}
        trainingName={trainingName}
        setTrainingName={setTrainingName}
        user={user}
      />
      <select
        className="createTraining-selectTraining"
        onChange={selectTraining}
      >
        {trainings.map((item, index) => {
          return (
            <option key={index} value={item.id}>
              {item.name}
            </option>
          );
        })}
      </select>
      <AddExercisePanel trainingId={trainingId} />
    </div>
  );
};
