import React from "react";
import { ColorModal } from "./colorModal";
import { useState, useEffect } from "react";
import "./TrainingColors.css";

export const TrainingColors = (props) => {
  const [isColorModalVisible, setIsColorModalVisible] = useState(false);

  const { mainColor, setMainColor, trainingId } = props;

  const colorClick = () => {
    setIsColorModalVisible(true);
  };

  //   useEffect(() => {}, [mainColor]);
  return (
    <div className="trainingColors-wrapper">
      <div
        style={{ backgroundColor: mainColor }}
        className="trainingColors-mainColor"
        onClick={colorClick}
      ></div>
      {isColorModalVisible && (
        <ColorModal
          mainColor={mainColor}
          setMainColor={setMainColor}
          setIsColorModalVisible={setIsColorModalVisible}
          trainingId={trainingId}
        />
      )}
    </div>
  );
};
