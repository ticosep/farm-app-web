import axios from "axios";
const API_BASE = "";

let token = "";
const setToken = (value) => {
  token = value;
};

const config = () => {
  return {
    withCredentials: true,
    headers: {
      "content-type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  };
};

const instance = axios.create({
  baseURL: API_BASE,
});

export default {
  setToken,
  login: ({ email, password }) =>
    instance.post("/login", {  email, password }, config()),
  user: () => instance.get("/user", config()),
};
