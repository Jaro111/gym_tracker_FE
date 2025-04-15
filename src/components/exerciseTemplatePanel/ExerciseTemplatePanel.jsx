import React from "react";
import {
  getAllExercisexTemplate,
  deleteExercise,
} from "../../utils/exerciseTemplate";
import { MdOutlineModeEdit } from "react-icons/md";
import { RiDeleteBin2Line } from "react-icons/ri";
import { useEffect, useState, useContext } from "react";
import { userContext } from "../../common/context";
import { UpdateExerciseMOdal } from "../updateExerciseModal/UpdateExeriseModal";

import "./ExerciseTemplatePanel.css";
export const ExerciseTemplatePanel = (props) => {
  //
  const { exerciseList, setExerciseList, newExercise } = props;
  const user = useContext(userContext).user;
  //
  const [isEditModalVisible, setIsEditModalVisible] = useState(false);
  const [numberOfExercises, setNumberOfExercises] = useState(
    exerciseList.length
  );
  const [updateData, setUpdateData] = useState({
    name: "",
    id: 0,
    trainingId: 0,
    sets: 0,
    reps: 0,
    repsFrom: 0,
    repsTo: 0,
  });
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

  const openEditModal = (item) => {
    setIsEditModalVisible(true);
    updateData.name = item.name;
    updateData.id = item.id;
    updateData.trainingId = item.trainingId;
    updateData.sets = item.sets;
    updateData.reps = item.reps;
    updateData.repsFrom = item.repsFrom;
    updateData.repsTo = item.repsTo;
  };

  const deleteExerciseFunc = async (item) => {
    const data = await deleteExercise(user.token, item.id, item.trainingId);
    setNumberOfExercises(numberOfExercises - 1);
  };

  //
  useEffect(() => {
    getExercises();
  }, [props.trainingId, newExercise, updateData.sets, numberOfExercises]);
  //
  return (
    <div className="exerciseTemplatePanel-wrapper">
      {isEditModalVisible && (
        <UpdateExerciseMOdal
          user={user}
          isEditModalVisible={isEditModalVisible}
          setIsEditModalVisible={setIsEditModalVisible}
          updateData={updateData}
          setUpdateData={setUpdateData}
        />
      )}
      {exerciseList.length > 0
        ? exerciseList.map((item, index) => {
            return (
              <div key={index} className="exerciseTemplatePanel-item-wrapper">
                <div className="exerciseTemplatePanel-item-content-wrapper">
                  <p className="exerciseTemplatePanel-item-name-content">
                    {item.name}
                  </p>
                  {item.sets === 0 ? null : (
                    <>
                      <p className="exerciseTemplatePanel-item-sets">
                        {item.sets}
                      </p>
                      <p className="exerciseTemplatePanel-item-reps">X </p>
                    </>
                  )}

                  {item.reps > 0 ? (
                    <p className="exerciseTemplatePanel-item-reps">
                      {item.reps}
                    </p>
                  ) : item.repsFrom === 0 || item.repsTo === 0 ? null : (
                    <>
                      <p className="exerciseTemplatePanel-item-reps">
                        {item.repsFrom}
                      </p>
                      <p>-</p>
                      <p className="exerciseTemplatePanel-item-reps">
                        {item.repsTo}
                      </p>
                    </>
                  )}
                </div>
                <div className="exerciseTemplatePanel-item-icons">
                  <MdOutlineModeEdit
                    className="exerciseTemplatePanel-edit-icon"
                    onClick={() => openEditModal(item)}
                  />
                  <RiDeleteBin2Line
                    onClick={() => deleteExerciseFunc(item)}
                    className="exerciseTemplatePanel-delete-icon"
                  />
                </div>
              </div>
            );
          })
        : null}
    </div>
  );
};
