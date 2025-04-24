import React from "react";
import { addTrainingToPlan, getWeekPlan } from "../../utils/weekPLan";
import { TrainingOptions } from "../trainingOptions/TrainingOptions";
import { CategoriesStats } from "./CategoriesStats";
import { AddExerciseTemplatePanel } from "../addExerciseTemplate/AddExerciseTemplate";
import { TrainingDetailsPanel } from "./TrainingDetailsPanel";
import { userContext } from "../../common/context";
import { useState, useEffect, useContext } from "react";
import "./WeekPlanPanel.css";

export const WeekPlanPanel = (props) => {
  //
  const user = useContext(userContext).user;
  //
  const [trainingId, setTrainingId] = useState(null);
  const [trainingsList, setTrainingsList] = useState([]);
  const [trainingsString, setTrainingsString] = useState("");
  const [trainingIds, setTrainingIds] = useState([]);
  const [trainingListLength, setTrainingListLength] = useState(
    trainingsList.length
  );
  const [updateSets, setUpdateSets] = useState(0);

  const addTraining = async () => {
    const data = await addTrainingToPlan(user.token, trainingId);
    setTrainingListLength(trainingsList.length + 1);
  };

  const fetchWeekPlan = async () => {
    const data = await getWeekPlan(user.token);
    const tempArray = [];
    data.weekPlan.map((item) => {
      tempArray.push(item.trainingId);
    });
    setTrainingIds(tempArray);
    setTrainingsString(tempArray.toString());
    console.log(trainingsString);
    setTrainingsList(data.weekPlan || []);
  };
  //
  //
  useEffect(() => {
    console.log("Update", updateSets);
    if (user.username) {
      fetchWeekPlan();
    }
  }, [trainingId, trainingListLength, updateSets]);

  return (
    <div className="weekPlanPanel-wrapper">
      <TrainingOptions trainingId={trainingId} setTrainingId={setTrainingId} />
      <button onClick={addTraining} className="weekPlan-addTraining-btn">
        ADD TO WEEK PLAN
      </button>
      <p>Week plan Simulation</p>
      <TrainingDetailsPanel
        trainingsList={trainingsList}
        trainingListLength={trainingListLength}
        trainingId={trainingId}
        setTrainingId={setTrainingId}
        trainingIds={trainingIds}
        user={user}
      />
      <CategoriesStats
        user={user}
        trainingsString={trainingsString}
        updateSets={updateSets}
      />
      {trainingIds.includes(trainingId) ? (
        <AddExerciseTemplatePanel
          trainingId={trainingId}
          updateSets={updateSets}
          setUpdateSets={setUpdateSets}
        />
      ) : null}
    </div>
  );
};
