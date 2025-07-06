import axios from "axios";

export const axiosClient = axios.create({
  baseURL: "http://3.37.40.96:3000/",
  headers: {
    "Content-Type": "application/json",
  },
});
