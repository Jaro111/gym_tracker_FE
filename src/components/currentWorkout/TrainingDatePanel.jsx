import React from "react";
import "./TrainingDatePanel.css";

export const TrainingDatePanel = () => {
  return (
    <div className="trainingDatePanel-wrapper">
      <div>
        <p className="trainingDatePanel-dateMinus">{"<"}</p>
      </div>
      <div>
        <p className="trainingDatePanel-date">DATA</p>
      </div>
      <div>
        <p className="trainingDatePanel-datePlus">{">"}</p>
      </div>
    </div>
  );
};
