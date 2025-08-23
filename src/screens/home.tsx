import {
  ClockFading,
  CloudRain,
  Droplet,
  Sunset,
  Thermometer,
  Wind,
} from "lucide-react";
import { Header } from "../components/header";
// import { WeeklyForecast } from "@/components/weeklyForecast";
import { useEffect, useState } from "react";
import { GetDailyForecast } from "@/api/get-daily-forecast";
import CloudySVG from "../assets/partly-cloudy.svg";
import SunnySVG from "../assets/sunny.svg";
import OvercastSVG from "../assets/overcast.svg";
import { WeeklyForecast } from "@/components/weeklyForecast";
import {
  DailyForecastItem,
  DailyForecastTimeLine,
} from "@/components/dailyForecastTimeLine";

type WeatherCondition = "Sunny" | "Partly cloudy" | "test" | "Clear";

const weatherIconMap: Record<WeatherCondition, string> = {
  Sunny: SunnySVG,
  "Partly cloudy": CloudySVG,
  Clear: SunnySVG,
  test: OvercastSVG,
};

interface DailyForecastResponse {
  current: {
    condition: {
      icon: string;
      text: string;
    };
    temp_c: number;
    feelslike_c: number;
    pressure_mb: number;
    uv: number;
    humidity: number;
    wind_kph: number;
  };
  location: {
    country: string;
    name: string;
  };
  forecast: {
    forecastday: [hour: DailyForecastItem];
  };
}

export function Home() {
  const [dailyForecast, SetDailyForecast] =
    useState<DailyForecastResponse | null>(null);

  async function getForecastDetails() {
    const response = await GetDailyForecast({ lat: -9.97, long: -67.86 });
    SetDailyForecast(response);
  }

  useEffect(() => {
    getForecastDetails();
  }, []);
  return (
    <div>
      <Header />

      <div className="flex flex-col gap-10 my-[40px] xl:grid xl:grid-cols-9 xl:my-[70px] xl:px-48 xl:gap-2">
        <main className="flex flex-col gap-10 xl:grid xl:col-span-5">
          <div className="flex flex-col w-4/5 px-auto mx-auto items-center justify-around bg-card border border-border rounded-md xl:h-[260px] xl:w-full xl:flex-row">
            <div className="flex flex-col text-center gap-6 py-10 xl:text-start">
              <div>
                <p className="bg-card text-2xl font-bold">
                  {dailyForecast?.location.name}
                </p>
                <p className="text-muted-foreground font-semibold">
                  Ensolarado
                </p>
              </div>

              <p className="font-semibold text-4xl">
                {dailyForecast && Math.round(dailyForecast.current.temp_c)}
                °C
              </p>
            </div>

            {dailyForecast && (
              <img
                className="size-40 xl:size-50"
                src={dailyForecast.current.condition.icon}
                alt=""
              />
            )}
          </div>

          <div className="flex h-[180px] w-4/5 mx-auto items-center justify-around bg-card rounded-md border border-border xl:w-full xl:h-[200px]">
            {dailyForecast && (
              <DailyForecastTimeLine
                forecast={dailyForecast.forecast.forecastday}
              />
            )}
          </div>

          <div className="grid grid-cols-2 w-4/5 mx-auto gap-10 bg-card p-10 rounded-md border border-border xl:flex-row xl:h-[200px] xl:w-full xl:grid-cols-3 xl:gap-6 xl:p-8">
            <div className="flex flex-col gap-2 items-start ml-6">
              <div className="relative flex gap-2">
                <Thermometer className="absolute -left-6 size-5 text-muted-foreground" />
                <div className="text-sm text-muted-foreground uppercase font-semibold">
                  Sensação Térmica
                </div>
              </div>

              <p className="text-xl">
                {dailyForecast &&
                  Math.round(dailyForecast?.current.feelslike_c)}
                °C
              </p>
            </div>

            <div className="flex flex-col gap-2 items-start ml-6">
              <div className="relative flex gap-2 items-center">
                <CloudRain className="absolute -left-6 size-5 text-muted-foreground" />
                <div className="text-sm text-muted-foreground uppercase font-semibold">
                  Chance de chuva
                </div>
              </div>

              <p className="text-xl">27%</p>
            </div>

            <div className="flex flex-col gap-2 items-start ml-6">
              <div className="relative flex gap-2 items-center">
                <Wind className="absolute -left-6 size-5 text-muted-foreground" />
                <div className="text-sm text-muted-foreground uppercase font-semibold">
                  Vento
                </div>
              </div>

              <p className="text-xl">
                {dailyForecast && Math.round(dailyForecast?.current.wind_kph)}
                km/h
              </p>
            </div>

            <div className="flex flex-col gap-2 items-start ml-6">
              <div className="relative flex gap-2 items-center">
                <Droplet className="absolute -left-6 size-5 text-muted-foreground" />
                <div className="text-sm text-muted-foreground uppercase font-semibold">
                  Humidade
                </div>
              </div>

              <p className="text-xl">{dailyForecast?.current.humidity}%</p>
            </div>

            <div className="flex flex-col gap-2 items-start ml-6">
              <div className="relative flex gap-2 items-center">
                <Sunset className="absolute -left-6 size-5 text-muted-foreground" />
                <div className="text-sm text-muted-foreground uppercase font-semibold">
                  UV
                </div>
              </div>

              <p className="text-xl">
                {dailyForecast && Math.round(dailyForecast?.current.uv)}
              </p>
            </div>

            <div className="flex flex-col gap-2 items-start ml-6">
              <div className="relative flex gap-2 items-center">
                <ClockFading className="absolute -left-6 size-5 text-muted-foreground" />
                <div className="text-sm text-muted-foreground uppercase font-semibold">
                  Pressão
                </div>
              </div>

              <p className="text-xl">{dailyForecast?.current.pressure_mb} mb</p>
            </div>
          </div>
        </main>

        <div className="flex flex-col w-4/5 mx-auto items-center justify-center gap-6 h-full bg-card p-4 rounded-md border border-border xl:col-start-6 xl:col-end-10">
          <WeeklyForecast />
        </div>
      </div>
    </div>
  )
}
