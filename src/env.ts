import * as z from "zod";

const envSchema = z.object({
  VITE_WEATHERAPI_BASEURL: z.string(),
  VITE_OPENWEATHERAPI_BASEURL: z.string(),
  VITE_API_WEATHER_KEY: z.string(),
  VITE_API_OPENWEATHER_KEY: z.string(),
});

export const env = envSchema.parse(import.meta.env);
