import {
  ClockFading,
  CloudRain,
  Droplet,
  Sunset,
  Thermometer,
  Wind
} from 'lucide-react'
import { Header } from '../components/header'
import { useContext, useEffect, useState } from 'react'
import { GetDailyForecast } from '@/api/get-daily-forecast'
import CloudySVG from '../assets/partly-cloudy.svg'
import SunnySVG from '../assets/sunny.svg'
import OvercastSVG from '../assets/overcast.svg'
import { WeeklyForecast } from '@/components/weeklyForecast'
import {
  DailyForecastItem,
  DailyForecastTimeLine
} from '@/components/dailyForecastTimeLine'
import { UserCurrentLocationContext } from '@/context/userCurrentLocationContext'
import { Skeleton } from '@/components/ui/skeleton'

type WeatherCondition = 'Sunny' | 'Partly cloudy' | 'test' | 'Clear'

const weatherIconMap: Record<WeatherCondition, string> = {
  Sunny: SunnySVG,
  'Partly cloudy': CloudySVG,
  Clear: SunnySVG,
  test: OvercastSVG
}

interface DailyForecastResponse {
  current: {
    condition: {
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
}

export function Home() {
  const [dailyForecast, SetDailyForecast] =
    useState<DailyForecastResponse | null>(null)
  const [isLoading, setIsLoading] = useState<boolean>(false)

  const { getUserCurrentLocation } = useContext(UserCurrentLocationContext)

  async function getForecastDetails() {
    setIsLoading(true)
    const { latitude, longitude } = await getUserCurrentLocation()
    const response = await GetDailyForecast({ latitude, longitude })

    SetDailyForecast(response)
    setIsLoading(false)
  }

  useEffect(() => {
    getForecastDetails()
  }, [])
  return (
    <div>
      <Header />

      <div className="flex flex-col gap-10 my-[40px] xl:grid xl:grid-cols-9 xl:my-[70px] xl:px-48 xl:gap-2">
        <main className="flex flex-col gap-10 xl:grid xl:col-span-5">
          <div className="flex flex-col w-4/5 px-auto mx-auto items-center justify-around bg-card border border-border rounded-md xl:h-[260px] xl:gap-25 xl:w-full md:flex-row md:justify-center md:gap-10 xl:flex-row">
            {isLoading ? (
              <div className="flex flex-col items-center gap-5 p-6 md:flex-row md:gap-20">
                <div className="flex flex-col gap-6 items-center md:items-start">
                  <Skeleton className="w-[150px] p-2 md:h-[30px]" />
                  <Skeleton className="w-[110px] p-2" />

                  <Skeleton className="w-[70px] h-[40px]" />
                </div>

                <Skeleton className="size-40 xl:size-50" />
              </div>
            ) : (
              <>
                <div className="flex flex-col text-center gap-6 py-6 md:text-start xl:text-start">
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
                    className="size-40 xl:size-45"
                    src={dailyForecast.current.condition.icon}
                    alt=""
                  />
                )}
              </>
            )}
          </div>

          <div className="flex h-[180px] w-4/5 mx-auto items-center bg-card justify-center rounded-md border border-border xl:w-full xl:h-[200px]">
            {isLoading ? (
              <div className="flex gap-2 py-3 xl:gap-6">
                <Skeleton className="w-[80px] h-[160px]" />
                <Skeleton className="w-[80px] h-[160px]" />
                <Skeleton className="w-[80px] h-[160px]" />
                <Skeleton className="w-[80px] h-[160px]" />
                <Skeleton className="w-[80px] h-[160px]" />
              </div>
            ) : (
              dailyForecast && (
                <DailyForecastTimeLine
                  forecast={dailyForecast.forecast.forecastday}
                />
              )
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
          {isLoading ? (
            <div className="flex flex-col justify-between items-center gap-6 py-8 px-6">
              <Skeleton className="w-[335px] h-[80px] md:w-[550px] xl:w-[335px] p-4" />
              <Skeleton className="w-[335px] h-[80px] md:w-[550px] xl:w-[335px] p-4" />
              <Skeleton className="w-[335px] h-[80px] md:w-[550px] xl:w-[335px] p-4" />
              <Skeleton className="w-[335px] h-[80px] md:w-[550px] xl:w-[335px] p-4" />
              <Skeleton className="w-[335px] h-[80px] md:w-[550px] xl:w-[335px] p-4" />
              <Skeleton className="w-[335px] h-[80px] md:w-[550px] xl:w-[335px] p-4" />
              <Skeleton className="w-[335px] h-[80px] md:w-[550px] xl:w-[335px] p-4" />
            </div>
          ) : (
            <WeeklyForecast />
          )}
        </div>
      </div>
    </div>
  )
}
