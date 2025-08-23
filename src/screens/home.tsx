import {
  ClockFading,
  CloudRain,
  Droplet,
  Sunset,
  Thermometer,
<<<<<<< HEAD
  Wind
} from 'lucide-react'
import { Header } from '../components/header'
// import { WeeklyForecast } from "@/components/weeklyForecast";
import { useEffect, useState } from 'react'
import { GetDailyForecast } from '@/api/get-daily-forecast'
import CloudySVG from '../assets/partly-cloudy.svg'
import SunnySVG from '../assets/sunny.svg'
import OvercastSVG from '../assets/overcast.svg'
import { WeeklyForecast } from '@/components/weeklyForecast'
import {
  DailyForecastItem,
  DailyForecastTimeLine
} from '@/components/dailyForecastTimeLine'

type WeatherCondition = 'Sunny' | 'Partly cloudy' | 'test' | 'Clear'

const weatherIconMap: Record<WeatherCondition, string> = {
  Sunny: SunnySVG,
  'Partly cloudy': CloudySVG,
  Clear: SunnySVG,
  test: OvercastSVG
}
=======
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
>>>>>>> 1492f44c479e6bf17be5b92ec81f3a62574d4966

interface DailyForecastResponse {
  current: {
    condition: {
<<<<<<< HEAD
      icon: string
      text: string
    }
    temp_c: number
    feelslike_c: number
    pressure_mb: number
    uv: number
    humidity: number
    wind_kph: number
  }
  location: {
    country: string
    name: string
  }
  forecast: {
    forecastday: [hour: DailyForecastItem]
  }
=======
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
>>>>>>> 1492f44c479e6bf17be5b92ec81f3a62574d4966
}

export function Home() {
  const [dailyForecast, SetDailyForecast] =
<<<<<<< HEAD
    useState<DailyForecastResponse | null>(null)

  async function getForecastDetails() {
    const response = await GetDailyForecast({ lat: -9.97, long: -67.86 })
    SetDailyForecast(response)
  }

  useEffect(() => {
    getForecastDetails()
  }, [])
=======
    useState<DailyForecastResponse | null>(null);

  async function getForecastDetails() {
    const response = await GetDailyForecast({ lat: -9.97, long: -67.86 });
    SetDailyForecast(response);
  }

  useEffect(() => {
    getForecastDetails();
  }, []);
>>>>>>> 1492f44c479e6bf17be5b92ec81f3a62574d4966
  return (
    <div>
      <Header />

<<<<<<< HEAD
      <div className="flex flex-col gap-10 my-[40px] xl:grid xl:grid-cols-9 xl:my-[70px] xl:px-48 xl:gap-2">
        <main className="flex flex-col gap-10 xl:grid xl:col-span-5">
          <div className="flex flex-col w-4/5 px-auto mx-auto items-center justify-around bg-card border border-border rounded-md xl:h-[260px] xl:w-full xl:flex-row">
            <div className="flex flex-col text-center gap-6 py-10 xl:text-start">
=======
      <div className="grid grid-cols-9 px-48 mt-[90px] gap-10">
        <main className="flex flex-col col-span-6 gap-10 ">
          <div className="flex items-center justify-around bg-card h-[250px] border border-border rounded-md">
            <div className="flex flex-col gap-8">
>>>>>>> 1492f44c479e6bf17be5b92ec81f3a62574d4966
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
<<<<<<< HEAD
                className="size-40 xl:size-50"
=======
                className="size-50"
>>>>>>> 1492f44c479e6bf17be5b92ec81f3a62574d4966
                src={dailyForecast.current.condition.icon}
                alt=""
              />
            )}
          </div>

<<<<<<< HEAD
          <div className="flex h-[180px] w-4/5 mx-auto items-center justify-around bg-card rounded-md border border-border xl:w-full xl:h-[200px]">
=======
          <div className="flex h-[180px] items-center justify-around bg-card rounded-md border border-border">
>>>>>>> 1492f44c479e6bf17be5b92ec81f3a62574d4966
            {dailyForecast && (
              <DailyForecastTimeLine
                forecast={dailyForecast.forecast.forecastday}
              />
            )}
          </div>

<<<<<<< HEAD
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
=======
          <div className="flex gap-10 items-center justify-around h-[180px] bg-card p-4 rounded-md border border-border">
            <div className="flex flex-col gap-4">
              <div className="flex flex-col gap-2 items-start">
                <div className=" flex gap-2 items-center">
                  <Thermometer className="relative right-6 size-5 text-muted-foreground" />
                  <div className="absolute text-sm text-muted-foreground uppercase font-semibold">
                    Sensação Térmica
                  </div>
                </div>

                <p className="text-xl">
                  {dailyForecast &&
                    Math.round(dailyForecast?.current.feelslike_c)}
                  °C
                </p>
              </div>

              <div className="flex flex-col gap-2 items-start">
                <div className="flex gap-2 items-center">
                  <Wind className="size-5 right-12 text-muted-foreground" />
                  <div className="text-sm text-muted-foreground uppercase font-semibold">
                    Vento
                  </div>
                </div>

                <p className="text-xl">
                  {dailyForecast && Math.round(dailyForecast?.current.wind_kph)}
                  km/h
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-4">
              <div className="flex flex-col gap-2 items-start">
                <div className="flex gap-2 items-center">
                  <Droplet className="size-5 right-12 text-muted-foreground" />
                  <div className="text-sm text-muted-foreground uppercase font-semibold">
                    Humidade
                  </div>
                </div>

                <p className="text-xl">{dailyForecast?.current.humidity}%</p>
              </div>

              <div className="flex flex-col gap-2 items-start">
                <div className="flex gap-2 items-center">
                  <CloudRain className="size-5 right-12 text-muted-foreground" />
                  <div className="text-sm text-muted-foreground uppercase font-semibold">
                    Chance de chuva
                  </div>
                </div>

                <p className="text-xl">27%</p>
              </div>
            </div>

            <div className="flex flex-col gap-4">
              <div className="flex flex-col gap-2 items-start">
                <div className="flex gap-2 items-center">
                  <Sunset className="size-5 right-12 text-muted-foreground" />
                  <div className="text-sm text-muted-foreground uppercase font-semibold">
                    UV
                  </div>
                </div>

                <p className="text-xl">
                  {dailyForecast && Math.round(dailyForecast?.current.uv)}
                </p>
              </div>

              <div className="flex flex-col gap-2 items-start">
                <div className="flex gap-2 items-center">
                  <ClockFading className="size-5 right-12 text-muted-foreground" />
                  <div className="text-sm text-muted-foreground uppercase font-semibold">
                    Pressão
                  </div>
                </div>

                <p className="text-xl">
                  {dailyForecast?.current.pressure_mb} mb
                </p>
              </div>
>>>>>>> 1492f44c479e6bf17be5b92ec81f3a62574d4966
            </div>
          </div>
        </main>

<<<<<<< HEAD
        <div className="flex flex-col w-4/5 mx-auto items-center justify-center gap-6 h-full bg-card p-4 rounded-md border border-border xl:col-start-6 xl:col-end-10">
=======
        <div className="flex flex-col items-center justify-center gap-6 col-start-7 col-end-10 h-full bg-card p-4 rounded-md border border-border">
>>>>>>> 1492f44c479e6bf17be5b92ec81f3a62574d4966
          <WeeklyForecast />
        </div>
      </div>
    </div>
<<<<<<< HEAD
  )
=======
  );
>>>>>>> 1492f44c479e6bf17be5b92ec81f3a62574d4966
}
