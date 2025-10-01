const url = import.meta.env.VITE_URL;

// add training
export const addTraining = async (name, jwt) => {
  const res = await fetch(`${url}/training/addTraining`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${jwt}`,
    },
    body: JSON.stringify({
      name: name,
    }),
  });

  const data = await res.json();
  return data;
};

// get all trainings
export const getAllTrainings = async (jwt) => {
  const res = await fetch(`${url}/training/getAllTrainings`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${jwt}`,
    },
  });

  const data = await res.json();
  return data;
};

// get training by id

export const getTraining = async (jwt, id) => {
  const res = await fetch(`${url}/training/getTraining/${id}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${jwt}`,
    },
  });

  const data = await res.json();
  return data;
};

// Get training ids and names
export const getTrainingIdsNames = async (jwt) => {
  const res = await fetch(`${url}/training/getTrainingNamesAndIds`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${jwt}`,
    },
  });

  const data = await res.json();
  return data;
};

// Update color
export const updateTrainingColor = async (jwt, id, color) => {
  const res = await fetch(`${url}/training/updateColor`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${jwt}`,
    },
    body: JSON.stringify({
      id: id,
      color: color,
    }),
  });

  const data = await res.json();
  return data;
};
