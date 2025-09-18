import React, { useState } from "react";
import { TrainingOptions } from "../trainingOptions/TrainingOptions";
import { IoIosClose } from "react-icons/io";
import "./AddTrainingModal.css";

export const AddTrainingModal = (props) => {
  //
  const [trainingId, setTrainingId] = useState(null);
  const { setIsAddTrainingModalVisible, trainingDayDate } = props;
  //
  const closeModal = () => {
    setIsAddTrainingModalVisible(false);
  };
  const addTrainingDay = () => {
    console.log(trainingId);
  };
  return (
    <div className="AddTrainingModal-wrapper">
      <div className="AddTrainingModal-close-wrapper">
        <IoIosClose
          className="AddTrainingModal-close-icon "
          onClick={closeModal}
        />
      </div>
      <div className="AddTainingModal-TrainingOptions-wrapper">
        <div>
          <p>{trainingDayDate}</p>
          <TrainingOptions
            trainingId={trainingId}
            setTrainingId={setTrainingId}
          />
        </div>
      </div>
      <div>
        <button onClick={addTrainingDay}>ADD</button>
      </div>
    </div>
  );
};
