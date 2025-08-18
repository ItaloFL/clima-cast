export interface DailyForecastItem {
  time_epoch: number;
  time: string;
  temp_c: number;
  condition: {
    text: string;
    icon: string;
  };
}

interface DailyForecastRequest {
  forecast: {
    hour: DailyForecastItem[];
  }[];
}

export function DailyForecastTimeLine({ forecast }: DailyForecastRequest) {
  return (
    <>
      <div className="flex items-center gap-16">
        {forecast[0].hour
          .filter((_, index) => [4, 8, 12, 16, 20].includes(index))
          .map((item) => {
            return (
              <div
                key={item.time_epoch}
                className="flex flex-col gap-3 items-center w-[120px]"
              >
                <span className="font-semibold">
                  {new Date(item.time.replace(" ", "T")).toLocaleTimeString(
                    "pt-BR",

                    {
                      hour: "2-digit",
                      minute: "2-digit",
                      hour12: true,
                    }
                  )}
                </span>

                <img className="size-18" src={item.condition.icon} alt="" />

                <span>{Math.round(item.temp_c)}°C</span>
              </div>
            );
          })}
      </div>
    </>
  );
}
