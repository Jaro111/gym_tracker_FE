import React from "react";
import { getAllTrainings } from "../../utils/utilsTraining";
import { userContext } from "../../common/context";
import { useState, useEffect, useContext } from "react";

export const TrainingOptions = ({ trainingId, setTrainingId }) => {
  //
  const user = useContext(userContext).user;
  const [trainings, setTrainings] = useState([]);
  const [weekTrainingIds, setWeekTrainingIds] = useState([]);

  //

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

  return (
    <div className="training-options-wrapper">
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
    </div>
  );
};
