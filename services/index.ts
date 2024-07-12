import axios from "axios";
import auth from "./auth";
import user from "./user";

const API_URL = {
  development: "http://127.0.0.1:8000/api",
};

const httpClient = axios.create({
  baseURL: API_URL.development,
});

export default {
  auth: auth(httpClient),
  user: user(httpClient),
};
