import React, { useEffect, useState } from "react";
import "./TrainingDetailsPanel.css";

export const TrainingDetailsPanel = (props) => {
  const { trainingsList, setTrainingId, trainingId, updateData } = props;
  const [isBtnActive, setIsbtnActive] = useState({});
  //
  const clickBtn = (item) => {
    setTrainingId(item.trainingId);
    isBtnActive[item.trainingId] = true;
  };
  useEffect(() => {}, [isBtnActive]);

  return (
    <div className="trainingDetailsPanel-wrapper">
      <div className="trainingDetailsPanel-btns-wrapper">
        {trainingsList.map((item, index) => {
          return (
            <button
              style={{
                backgroundColor:
                  item.trainingId === trainingId ? "lightgreen" : "lightgrey",
              }}
              onClick={() => clickBtn(item)}
              key={index}
            >
              {item.Training.name}
            </button>
          );
        })}
      </div>
    </div>
  );
};
