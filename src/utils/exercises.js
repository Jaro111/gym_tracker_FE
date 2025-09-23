const url = import.meta.env.VITE_URL;

export const getExercisesByDate = async (jwt, date) => {
  const res = await fetch(`${url}//exercises/getExercisesByDate/:${date}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${jwt}`,
    },
  });

  const data = await res.json();

  return data;
};
