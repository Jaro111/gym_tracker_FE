import React from "react";
import { addSetsReps } from "../../utils/exerciseTemplate";
import { IoIosClose } from "react-icons/io";
import { useState } from "react";
import "./UpdateExerciseMOdal.css";

export const UpdateExerciseMOdal = (props) => {
  //
  const { updateData, user } = props;
  const [constRange, setConstRange] = useState(true);
  const [sets, setSets] = useState(updateData.sets);
  const [reps, setReps] = useState(updateData.reps);
  const [repsFrom, setRepsFrom] = useState(updateData.repsFrom);
  const [repsTo, setRepsTo] = useState(updateData.repsTo);
  //
  const confirmClick = async () => {
    if (constRange) {
      const data = await addSetsReps(
        user.token,
        "reps",
        updateData.id,
        updateData.trainingId,
        sets,
        reps
      );
      if (sets !== updateData.sets) {
        updateData.sets = sets;
      }
      updateData.reps = reps;

      console.log(data);
    } else if (!constRange) {
      const data = await addSetsReps(
        user.token,
        "fromTo",
        updateData.id,
        updateData.trainingId,
        sets,
        reps,
        repsFrom,
        repsTo
      );
      if (sets !== updateData.sets) {
        updateData.sets = sets;
      }
      updateData.repsFrom = repsFrom;
      updateData.repsTo = repsTo;
      console.log(data);
    }
    props.setIsEditModalVisible(false);
  };

  const changeHandler = (e, setter) => {
    setter(e.target.value);
    console.log("repsFrom", repsFrom);
    console.log("repsTo", repsTo);
  };

  return (
    <div className="updateExerciseMOdal-wrapper">
      <div className="updateExerciseMOdal-close-wrapper">
        <IoIosClose
          onClick={() => props.setIsEditModalVisible(false)}
          className="updateExerciseMOdal-close-icon"
        />
      </div>
      <div className="updateExerciseMOdal-edit-wrapper">
        <p>{updateData.name}</p>
        <p className="updateExerciseMOdal-item-data-content">SETS</p>
        <input
          onChange={(e) => changeHandler(e, setSets)}
          className="updateExerciseMOdal-item-data-input"
        ></input>

        <p className="updateExerciseMOdal-item-data-content">REPS</p>
        <div>
          <button
            style={{
              backgroundColor: constRange ? "rgb(97, 211, 52)" : "lightgray",
            }}
            onClick={() => setConstRange(true)}
          >
            CONSTANT
          </button>
          <button
            style={{
              backgroundColor: constRange ? "lightgray" : "rgb(97, 211, 52)",
            }}
            onClick={() => setConstRange(false)}
          >
            RANGE
          </button>
        </div>
        {constRange ? (
          <div className="updateExerciseMOdal-input-wrapper">
            <input
              className="updateExerciseMOdal-item-data-input"
              onChange={(e) => changeHandler(e, setReps)}
            ></input>
          </div>
        ) : (
          <div className="updateExerciseMOdal-input-wrapper">
            <p className="updateExerciseMOdal-item-data-content">FROM</p>
            <input
              className="updateExerciseMOdal-item-data-input"
              onChange={(e) => changeHandler(e, setRepsFrom)}
            ></input>
            <p className="updateExerciseMOdal-item-data-content">TO</p>
            <input
              className="updateExerciseMOdal-item-data-input"
              onChange={(e) => changeHandler(e, setRepsTo)}
            ></input>
          </div>
        )}
        <button onClick={() => confirmClick()}>CONFIRM</button>
      </div>
    </div>
  );
};
