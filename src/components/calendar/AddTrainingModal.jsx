import React, { useState, useEffect } from "react";
import { TrainingOptions } from "../trainingOptions/TrainingOptions";
import { addTrainingDay } from "../../utils/trainingDay";
import { IoIosClose } from "react-icons/io";
import "./AddTrainingModal.css";

export const AddTrainingModal = (props) => {
  //
  const [trainingId, setTrainingId] = useState(null);
  const { setIsAddTrainingModalVisible, trainingDayDate, user } = props;
  //
  const closeModal = () => {
    setIsAddTrainingModalVisible(false);
  };
  const addTrainingClick = async () => {
    const data = await addTrainingDay(
      user.token,
      trainingDayDate,
      Number(trainingId)
    );
    setIsAddTrainingModalVisible(false);
  };

  useEffect(() => {
    console.log(trainingId);
  }, []);
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
          <p className="AddTainingModal-date-content">{trainingDayDate}</p>
          <TrainingOptions
            trainingId={trainingId}
            setTrainingId={setTrainingId}
          />
        </div>
      </div>
      <div>
        <button className="AddTainingModal-addBtn" onClick={addTrainingClick}>
          ADD
        </button>
      </div>
    </div>
  );
};
