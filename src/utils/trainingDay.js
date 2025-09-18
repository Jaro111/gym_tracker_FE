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
  console.log(data);
};
