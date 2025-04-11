import React from "react";
import { getExampleExercises } from "../../utils/exampleExercises";
import { addExerciseTemplate } from "../../utils/exerciseTemplate";
import { userContext } from "../../common/context";
import { ExampleExercisesList } from "../exampleExercisesList/ExampleExercisesList";
import { ExerciseTemplatePanel } from "./ExerciseTemplatePanel";
import { useState, useEffect, useContext } from "react";
import "./AddExercisePanel.css";
//
export const AddExercisePanel = (props) => {
  //
  const user = useContext(userContext).user;
  const { trainingId } = props;
  //
  const [suggestionList, setSuggestionList] = useState([]);
  const [exerciseData, setExerciseData] = useState([]);
  const [chosenExercise, setChosenExercise] = useState({});
  const [exerciseList, setExerciseList] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [newExercise, setNewExercise] = useState({});
  //
  const getExercises = async () => {
    const exercises = await getExampleExercises();
    // console.log(exercises);
    setExerciseData(exercises.data);
  };
  //
  const changeHandler = (e) => {
    setInputValue(e.target.value);
    const tempArray = [];
    const value = e.target.value;
    if (value.length > 0) {
      exerciseData.filter((item) => {
        if (
          value === item.name.slice(0, value.length).toLowerCase() ||
          value === item.category.slice(0, value.length).toLowerCase()
        ) {
          tempArray.push({ name: item.name, category: item.category });
        }
        setSuggestionList(tempArray);
      });
    } else {
      setSuggestionList([]);
    }
  };
  //
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
      // console.log("No choice");
    }
  };
  //
  useEffect(() => {
    // console.log(trainingId);
    getExercises();
  }, [chosenExercise.name]);

  return (
    <div className="addExercisePanel-wrapper">
      <div className="addExercisePanel-input-wrapper">
        <input
          onChange={(e) => changeHandler(e)}
          className="addExercisePanel-input"
          placeholder={chosenExercise.name}
          value={inputValue}
        ></input>
        <button onClick={addExercise} className="addExercisePanel-btn">
          ADD
        </button>
        <ExampleExercisesList
          suggestionList={suggestionList}
          setSuggestionList={setSuggestionList}
          chosenExercise={chosenExercise}
          setChosenExercise={setChosenExercise}
          setInputValue={setInputValue}
        />
      </div>
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
