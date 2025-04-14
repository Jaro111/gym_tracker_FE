const url = import.meta.env.VITE_URL;

// add exercise to template
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

// get all exercises
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
// add sets and reps

export const addSetsReps = async (
  jwt,
  choice,
  id,
  trainingId,
  sets,
  reps,
  repsFrom,
  repsTo
) => {
  const res = await fetch(`${url}/exercises/updateExercises`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${jwt}`,
    },
    body: JSON.stringify({
      choice: choice,
      id: id,
      trainingId: trainingId,
      sets: sets,
      reps: reps,
      repsFrom: repsFrom,
      repsTo: repsTo,
    }),
  });

  const data = res.json();
  return data;
};
