import React from "react";
import { useState } from "react";
import { CreateTrainingPanel } from "../components/createTrainingPanel/CreateTrainingPanel";
export const CreateTraining = () => {
  const [trainingId, setTrainingId] = useState(null);

  return <CreateTrainingPanel />;
};
