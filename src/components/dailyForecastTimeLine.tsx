<<<<<<< HEAD
import { Carousel, CarouselContent, CarouselItem } from './ui/carousel'

export interface DailyForecastItem {
  time_epoch: number
  time: string
  temp_c: number
  condition: {
    text: string
    icon: string
  }
=======
export interface DailyForecastItem {
  time_epoch: number;
  time: string;
  temp_c: number;
  condition: {
    text: string;
    icon: string;
  };
>>>>>>> 1492f44c479e6bf17be5b92ec81f3a62574d4966
}

interface DailyForecastRequest {
  forecast: {
<<<<<<< HEAD
    hour: DailyForecastItem[]
  }[]
=======
    hour: DailyForecastItem[];
  }[];
>>>>>>> 1492f44c479e6bf17be5b92ec81f3a62574d4966
}

export function DailyForecastTimeLine({ forecast }: DailyForecastRequest) {
  return (
    <>
<<<<<<< HEAD
      <Carousel className="flex items-center xl:gap-12">
        <CarouselContent className='p-10'>
          {forecast[0].hour
            .filter((_, index) => [4, 8, 12, 16, 20].includes(index))
            .map(item => {
              return (
                <CarouselItem key={item.time_epoch} className="basis-1/4">
                  <div className="flex flex-col gap-4 w-[100px] bg-amber-300 rounded items-center justify-around">
                    <span className="font-semibold">
                      {new Date(item.time.replace(' ', 'T')).toLocaleTimeString(
                        'pt-BR',

                        {
                          hour: '2-digit',
                          minute: '2-digit',
                          hour12: true
                        }
                      )}
                    </span>

                    <img className="size-18" src={item.condition.icon} alt="" />

                    <span>{Math.round(item.temp_c)}°C</span>
                  </div>
                </CarouselItem>
              )
            })}
        </CarouselContent>
      </Carousel>
    </>
  )
=======
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
>>>>>>> 1492f44c479e6bf17be5b92ec81f3a62574d4966
}
