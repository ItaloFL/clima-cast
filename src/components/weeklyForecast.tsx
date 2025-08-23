import { GetWeeklyForecast } from "@/api/get-weekly-forecast";
import { useEffect, useState } from "react";

import CloudySVG from "../assets/partly-cloudy.svg";
import SunnySVG from "../assets/sunny.svg";
import OvercastSVG from "../assets/overcast.svg";

interface WeeklyForecastResponse {
  list: [
    {
      dt: number;
      temp: { day: number; min: number; max: number };
      weather: [{ id: number; description: string; }];
    }
  ];
}

const weeklyDescriptionMap: Record<string, string> = {
  "sky is clear": "Céu limpo",
  "few clouds": "Poucas nuvens",
  "scattered clouds": "Nuvens dispersas",
  "broken clouds": "Nuvens quebradas",
  "overcast clouds": "Céu encoberto",
  "light rain": "Chuva leve",
  "moderate rain": "Chuva",
};

const weeklyImageMap: Record<string, string> = {
  "sky is clear": SunnySVG,
  "few clouds": SunnySVG,
  "scattered clouds": OvercastSVG,
  "broken clouds": CloudySVG,
  "overcast clouds": CloudySVG,
  "light rain": CloudySVG,
  "moderate rain": CloudySVG,
};

export function WeeklyForecast() {
  const [weeklyForecast, SetWeeklyForecast] =
    useState<WeeklyForecastResponse | null>(null);

  async function getWeeklyForecast() {
    const response = await GetWeeklyForecast({ lat: -9.97, long: -67.86 });

    SetWeeklyForecast(response);
  }

  useEffect(() => {
    getWeeklyForecast();
  }, []);

  return (
<<<<<<< HEAD
    <div className="flex flex-col gap-4 items-center justify-between p-3 rounded-md w-full">
=======
    <div className="flex flex-col items-center justify-between p-3 rounded-md w-full h-[650px]">
>>>>>>> 1492f44c479e6bf17be5b92ec81f3a62574d4966
      {weeklyForecast &&
        weeklyForecast.list.map((item) => {
          return (
            <div
              key={item.dt}
              className="flex items-center w-full justify-between pb-5 p-4 bg-card-foreground rounded-md"
            >
              <div className="flex gap-4 items-center">
                <img
                  className="bg-muted p-1 rounded-md size-11"
                  src={weeklyImageMap[item.weather[0].description]}
                  alt=""
                />

                <div>
                  <p>
                    {new Date(item.dt * 1000)
                      .toLocaleString("pt-BR", {
                        weekday: "long",
                      })
                      .replace(/^\w/, (c) => c.toUpperCase())}
                  </p>

                  {item.weather.map((item) => {
                    return (
                      <span key={item.id}>
                        {weeklyDescriptionMap[item.description]}
                      </span>
                    );
                  })}
                </div>
              </div>

              <div>
                <p>
                  <span className="font-semibold">
                    {Math.round(item.temp.max)}°
                  </span>
                  /<span>{Math.round(item.temp.min)}°</span>
                </p>
              </div>
            </div>
          );
        })}
    </div>
  );
}
