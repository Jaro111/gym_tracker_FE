const url = import.meta.env.VITE_URL;

export const signUpUser = async (username, email, password) => {
  const res = await fetch(`${url}/user/signUp`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      username: username,
      email: email,
      password: password,
    }),
  });

  const user = await res.json();
  return user;
};
