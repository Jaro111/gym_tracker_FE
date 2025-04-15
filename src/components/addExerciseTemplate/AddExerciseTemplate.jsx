import React from "react";
import { getExampleExercises } from "../../utils/exampleExercises";
import { addExerciseTemplate } from "../../utils/exerciseTemplate";
import { userContext } from "../../common/context";
import { ExampleExercisesList } from "../exampleExercisesList/ExampleExercisesList";
import { ExerciseTemplatePanel } from "../exerciseTemplatePanel/ExerciseTemplatePanel";
import { useState, useEffect, useContext } from "react";
import "./AddExerciseTemplate.css";
//
export const AddExerciseTemplatePanel = (props) => {
  //
  const user = useContext(userContext).user;
  const { trainingId } = props;
  //
  const [exerciseData, setExerciseData] = useState([]);
  const [chosenExercise, setChosenExercise] = useState({});
  const [exerciseList, setExerciseList] = useState([]);
  const [newExercise, setNewExercise] = useState({});
  //
  const getExercises = async () => {
    const exercises = await getExampleExercises();
    setExerciseData(exercises.data);
  };

  const addExercise = async () => {
    if (chosenExercise.name) {
      const data = await addExerciseTemplate(
        chosenExercise.name,
        chosenExercise.category,
        trainingId,
        user.token
      );
      setNewExercise(data.exercise);
    } else {
    }
  };
  //
  useEffect(() => {
    getExercises();
  }, [chosenExercise.name]);

  return (
    <div className="addExercisePanel-wrapper">
      <ExampleExercisesList
        chosenExercise={chosenExercise}
        setChosenExercise={setChosenExercise}
        addExercise={addExercise}
        exerciseData={exerciseData}
      />
      <ExerciseTemplatePanel
        user={user}
        trainingId={trainingId}
        exerciseList={exerciseList}
        setExerciseList={setExerciseList}
        newExercise={newExercise}
      />
    </div>
  );
};
