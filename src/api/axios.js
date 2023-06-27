import axios from "axios";
const axiosInstance = axios.create({
  baseURL: "http://localhost:5003",
  timeout: 1000,
  headers: {
    "Content-type": "application/x-www-form-urlencoded; charset=UTF-8",
    Accept: "*/*",
  },
});

export { axiosInstance };
