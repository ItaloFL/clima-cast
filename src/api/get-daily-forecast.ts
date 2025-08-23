import { env } from "@/env";
import { weatherAPI } from "@/lib/axios";

interface GetDailyForecastRequest {
  lat: number;
  long: number;
}

export async function GetDailyForecast({ lat, long }: GetDailyForecastRequest) {
  const response = await weatherAPI.get(`/forecast.json?key=${env.VITE_API_WEATHER_KEY}&q=${lat},${long}&days=1`);

  return response.data
}
