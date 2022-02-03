import axios from "axios";

export const key = "08c9699c34b91c2f0530b50d30463edf2e2206f5";

const api = axios.create({
  baseURL: "https://api-ssl.bitly.com/v4",
  headers: {
    Authorization: `Bearer ${key}`,
  },
});

export default api;
