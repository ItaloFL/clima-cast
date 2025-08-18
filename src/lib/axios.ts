import { env } from "@/env";
import axios from "axios";

export const weatherAPI = axios.create({
  baseURL: env.VITE_WEATHERAPI_BASEURL,
});

export const openWeatherAPI = axios.create({
  baseURL: env.VITE_OPENWEATHERAPI_BASEURL,
});
