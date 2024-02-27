import axios from "axios";
import { SERVER_API_URL } from "../constant";

const config = {
  baseURL: `${SERVER_API_URL}`,
  headers: { "Content-Type": "application/json" },
};

axios.defaults.timeout = 100000;
const axiosInstance = axios.create(config);

export default axiosInstance;
