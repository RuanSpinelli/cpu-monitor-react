// src/services/api.ts
import axios from "axios";


const api = axios.create({
  baseURL: "http://localhost:8080", // ou onde sua API estiver rodando
});

export default api;
