const url = import.meta.env.VITE_URL;

// Add
export const addTrainingToPlan = async (jwt, trainingId) => {
  const res = await fetch(`${url}/weekPlan/addTraining`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${jwt}`,
    },
    body: JSON.stringify({
      trainingId: trainingId,
    }),
  });

  const data = await res.json();
  return data;
};

// get
export const getWeekPlan = async (jwt) => {
  const res = await fetch(`${url}/weekPlan/getPlan`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${jwt}`,
    },
  });

  const data = await res.json();
  return data;
};
