import axios from "axios";

const apiAdmin = axios.create({
  // baseURL: "http://localhost:4200/api",
  baseURL: "https://api.sahakarsugandh.com/api",
  withCredentials: false,
});

export default apiAdmin;
