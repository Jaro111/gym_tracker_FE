const url = import.meta.env.VITE_URL;

export const addExerciseTemplate = async (name, category, trainingId, jwt) => {
  const res = await fetch(`${url}/exercises/addExerciseTemplate`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${jwt}`,
    },
    body: JSON.stringify({
      name: name,
      category: category,
      trainingId: trainingId,
    }),
  });

  const data = await res.json();
  return data;
};

export const getAllExercisexTemplate = async (trainingId, jwt) => {
  const res = await fetch(
    `${url}/exercises/getAllExercisesTemplate/${trainingId}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${jwt}`,
      },
    }
  );

  const data = await res.json();
  return data;
};
