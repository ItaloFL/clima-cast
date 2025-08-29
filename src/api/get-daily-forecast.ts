import { env } from "@/env";
import { weatherAPI } from "@/lib/axios";

interface GetDailyForecastRequest {
  latitude: number;
  longitude: number;
}

export async function GetDailyForecast({ latitude, longitude }: GetDailyForecastRequest) {
  const response = await weatherAPI.get(`/forecast.json?key=${env.VITE_API_WEATHER_KEY}&q=${latitude},${longitude}&days=1`);

  return response.data
}
