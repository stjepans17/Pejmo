import axios from "axios";

// const API_BASE_URL = "http://localhost:8080/api";
const API_BASE_URL = "http://69.62.118.168:8080/api";

export const apiClient = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
  // withCredentials: true,
  timeout: 10000
})