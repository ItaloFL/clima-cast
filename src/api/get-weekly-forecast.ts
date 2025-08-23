import { env } from "@/env";
import { openWeatherAPI } from "@/lib/axios";

interface GetDailyForecastRequest {
  lat: number;
  long: number;
}

export async function GetWeeklyForecast({
  lat,
  long,
}: GetDailyForecastRequest) {
  const response = await openWeatherAPI.get(
    `/forecast/daily?lat=${lat}&lon=${long}&cnt=7&units=metric&appid=${env.VITE_API_OPENWEATHER_KEY}`
  );

  return response.data;
}
