import React from "react";
import { getAllTrainings } from "../../utils/utilsTraining";
import { AddTrainingPanel } from "./AddTrainingPanel";
import { userContext } from "../../common/context";
import { useState, useEffect, useContext } from "react";
import "./CreateTrainingPanel.css";

export const CreateTrainingPanel = () => {
  //
  let n = 0;
  const [trainings, setTrainings] = useState([]);
  const [trainingsLength, setTrainingsLength] = useState(0);
  const [trainingId, setTrainingId] = useState(null);

  const user = useContext(userContext).user;

  const fetchTrainings = async (jwt) => {
    const trainings = await getAllTrainings(jwt);
    console.log(trainings);
    setTrainings(trainings.trainings);
    setTrainingsLength(n + 1);
  };
  //
  useEffect(() => {
    fetchTrainings(user.token);
  }, [user.username, trainingsLength]);

  //
  return (
    <div className="createTraining-wrapper">
      <AddTrainingPanel trainingId={trainingId} setTrainingId={setTrainingId} />
      {trainingsLength > 0
        ? trainings.map((item, index) => {
            return (
              <div key={index}>
                <p>{item.name}</p>
              </div>
            );
          })
        : null}
    </div>
  );
};
