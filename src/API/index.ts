import axios from "axios";

const API_URL = "https://frontend-test-api.yoldi.agency/api";

export const instance = axios.create({
  baseURL: API_URL,
});
