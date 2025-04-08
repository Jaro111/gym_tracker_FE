import React from "react";
import { getAllTrainings } from "../../utils/utilsTraining";
import { AddTrainingPanel } from "./AddTrainingPanel";
import { userContext } from "../../common/context";
import { useState, useEffect, useContext } from "react";
import "./CreateTrainingPanel.css";

export const CreateTrainingPanel = () => {
  //
  const [trainings, setTrainings] = useState([]);
  // const [trainingsLength, setTrainingsLength] = useState(0);
  const [trainingId, setTrainingId] = useState(null);
  const [trainingName, setTrainingName] = useState(null);

  const user = useContext(userContext).user;

  const fetchTrainings = async (jwt) => {
    if (user.token) {
      const trainings = await getAllTrainings(jwt);
      console.log(trainings);
      setTrainings(trainings.trainings || []);
    } else {
      console.log("Loading");
    }
  };
  //
  useEffect(() => {
    fetchTrainings(user.token);
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
      {trainings.map((item, index) => {
        return (
          <div key={index}>
            <p>{item.name}</p>
          </div>
        );
      })}
    </div>
  );
};
