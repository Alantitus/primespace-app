import axios from "axios";

const apiRequest = axios.create({
  baseURL: "https://primespace-server.onrender.com/api/",
  withCredentials: true,
});

export default apiRequest;