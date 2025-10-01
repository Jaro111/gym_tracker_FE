import React from "react";
import { userContext } from "../../common/context";
import { useContext } from "react";
import { updateTrainingColor } from "../../utils/utilsTraining";
import "./colorMOdal.css";

export const ColorModal = (props) => {
  const user = useContext(userContext).user;
  const colors = ["green", "red", "blue", "black", "violet"];

  const changeColorClick = async (item) => {
    const data = await updateTrainingColor(user.token, props.trainingId, item);
    console.log(data);
    props.setMainColor(item);
    props.setIsColorModalVisible(false);
  };
  return (
    <div className="colorMOdal-wrapper">
      {colors.map((item, index) => {
        return (
          <div
            key={index}
            className="colorModal-color"
            style={{
              backgroundColor: item,
            }}
            onClick={() => changeColorClick(item)}
          />
        );
      })}
    </div>
  );
};
