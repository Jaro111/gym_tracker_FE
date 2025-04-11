import React from "react";

import { useState } from "react";
import "./exampleExercisesList.css";

export const ExampleExercisesList = (props) => {
  const { suggestionList } = props;

  const selectExercise = (item) => {
    props.setChosenExercise(item);
    props.setSuggestionList([]);
    props.setInputValue("");
  };

  return (
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
  );
};
