const url = import.meta.env.VITE_URL;

export const getAllTrainingDays = async (jwt) => {
  const res = await fetch(`${url}/day/getAllTrainingDays`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${jwt}`,
    },
  });

  const data = await res.json();
  return data;
};

// Add training Day

export const addTrainingDay = async (jwt, date, trainingId) => {
  const res = await fetch(`${url}/day/addTrainingDay`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${jwt}`,
    },
    body: JSON.stringify({
      date: date,
      trainingId: trainingId,
    }),
  });

  const data = res.json();
  return data;
};
