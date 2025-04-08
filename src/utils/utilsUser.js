const url = import.meta.env.VITE_URL;
import Cookies from "js-cookie";

// Sign Up
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

// Log-In

export const logIn = async (username, password) => {
  const res = await fetch(`${url}/user/logIn`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      username: username,
      password: password,
    }),
  });

  const data = await res.json();
  const userData = data.user;
  Cookies.set("jwt-token", userData.token, {
    expires: 7,
  });

  return userData;
};

// auth check

export const authCheck = async (jwt) => {
  const res = await fetch(`${url}/user/authCheck`, {
    method: "GET",
    headers: {
      "Content-Type": "application-json",
      Authorization: `Bearer ${jwt}`,
    },
  });

  const data = await res.json();
  return data;
};
