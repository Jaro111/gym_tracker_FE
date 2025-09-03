import React, { useEffect, useState } from "react";
import { removeTrainingFromPlan } from "../../utils/weekPLan";
import { RiDeleteBin2Line } from "react-icons/ri";
import "./TrainingDetailsPanel.css";

export const TrainingDetailsPanel = (props) => {
  const { trainingsList, setTrainingId, trainingId, user } = props;
  const [isBtnActive, setIsbtnActive] = useState({});
  //
  const clickBtn = (item) => {
    setTrainingId(item.trainingId);
    isBtnActive[item.trainingId] = true;
  };

  const removeTRaining = async (item) => {
    console.log(item);
    const data = await removeTrainingFromPlan(user.token, item.trainingId);
    console.log(data);
  };
  useEffect(() => {}, [isBtnActive]);

  return (
    <div className="trainingDetailsPanel-wrapper">
      <div className="trainingDetailsPanel-btns-wrapper">
        {trainingsList.map((item, index) => {
          return (
            <div
              className="trainingDetailsPanel-trainingBtn-wrapper"
              key={index}
            >
              <button
                style={{
                  backgroundColor:
                    item.trainingId === trainingId ? "lightgreen" : "lightgrey",
                }}
                onClick={() => clickBtn(item)}
              >
                {item.Training.name}
              </button>
              <RiDeleteBin2Line
                className="trainingDetailsPanel-delete-icon"
                onClick={() => removeTRaining(item)}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};
