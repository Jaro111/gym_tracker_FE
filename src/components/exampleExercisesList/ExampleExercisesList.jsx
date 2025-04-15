import React from "react";
import { userContext } from "../../common/context";
import { useState, useContext } from "react";
import "./exampleExercisesList.css";

export const ExampleExercisesList = (props) => {
  // const { suggestionList } = props;
  const user = useContext(userContext).user;
  const [inputValue, setInputValue] = useState("");
  const [suggestionList, setSuggestionList] = useState([]);

  const selectExercise = (item) => {
    props.setChosenExercise(item);
    setSuggestionList([]);
    setInputValue("");
  };

  const changeHandler = (e) => {
    setInputValue(e.target.value);
    const tempArray = [];
    const value = e.target.value;
    if (value.length > 0) {
      props.exerciseData.filter((item) => {
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

  return (
    <div className="exampleExercise-input-wrapper">
      <input
        onChange={(e) => changeHandler(e)}
        className="exampleExercisel-input"
        placeholder={props.chosenExercise.name}
        value={inputValue}
      ></input>
      <button onClick={props.addExercise} className="exampleExercise-btn">
        ADD
      </button>

      <div
        style={{ display: suggestionList.length > 0 ? "flex" : "none" }}
        className="exampleExercisesList-wrapper"
      >
        {suggestionList.map((item, index) => {
          return (
            <div className="exampleExercisesList-item-wrapper" key={index}>
              <p
                onClick={() => selectExercise(item)}
                className="exampleExercisesList-item-name"
              >
                {item.name}
              </p>
              <p className="exampleExercisesList-item-category">
                {item.category}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};
