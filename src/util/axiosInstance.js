import axios from "axios";

const config = { baseURL: "https://trainer.richapplication.ir" };
export const axiosInstance = axios.create(config);
