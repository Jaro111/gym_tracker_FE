const url = import.meta.env.VITE_URL;

export const getExampleExercises = async () => {
  const res = await fetch(`${url}/example/getAllExampleExerises`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      // Authorization: `Bearer ${token}`,
    },
  });

  const data = await res.json();
  return data;
};
