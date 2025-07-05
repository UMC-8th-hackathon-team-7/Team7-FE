import axios from "axios";

export const axiosClient = axios.create({
  baseURL: "http://test2.shop:44003",
  headers: {
    "Content-Type": "application/json",
  },
});
