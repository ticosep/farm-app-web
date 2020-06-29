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
  login: ({ email, password }) => instance.post("/login", { email, password }),
  codeLogin: ({ code }) => instance.post("/login/code", { code }, config()),
  register: ({ name, surname, cpf, email, password }) =>
    instance.post("/signup", { name, surname, cpf, email, password }),
  validate: ({ id, email }) => instance.post("/signup/validate", { id, email }),
  user: () => instance.get("/user", config()),
  farms: () => instance.get("farm/user", config()),
  createFarm: ({ name, production }) =>
    instance.post("farm/create", { name, production }, config()),
  getTags: ({ farm_id }) => instance.get(`/tag/${farm_id}`, config()),
};
