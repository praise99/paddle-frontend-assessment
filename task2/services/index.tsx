// import axios from "axios";
import axios from "axios";

export const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL as string;

const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

export default api;
