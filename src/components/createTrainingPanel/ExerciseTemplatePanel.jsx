import React from "react";
import { getAllExercisexTemplate } from "../../utils/exerciseTemplate";
import { useEffect, useEffect } from "react";
import "./ExerciseTemplatePanel.css";
export const ExerciseTemplatePanel = (props) => {
  //
  const { exerciseList, setExerciseList, newExercise } = props;
  //
  const getExercises = async () => {
    if (props.trainingId) {
      const data = await getAllExercisexTemplate(
        props.trainingId,
        props.user.token
      );
      setExerciseList(data.exercises || []);
      console.log(data);
    }
  };
  useEffect(() => {
    getExercises();
  }, [props.trainingId, newExercise]);
  //
  return (
    <div className="exerciseTemplatePanel-wrapper">
      {exerciseList.length > 0
        ? exerciseList.map((item, index) => {
            return (
              <div key={index} className="exerciseTemplatePanel-item-wrapper">
                <p className="exerciseTemplatePanel-item-name-content">
                  {item.name}
                </p>
                {/* <p className="exerciseTemplatePanel-item-data-content">sets</p>
                <input className="exerciseTemplatePanel-item-data-input"></input>
                <p className="exerciseTemplatePanel-item-data-content">reps</p>
                <input className="exerciseTemplatePanel-item-data-input"></input> */}
              </div>
            );
          })
        : null}
    </div>
  );
};
