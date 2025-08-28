import { Carousel, CarouselContent, CarouselItem } from './ui/carousel'

export interface DailyForecastItem {
  time_epoch: number
  time: string
  temp_c: number
  condition: {
    text: string
    icon: string
  }
}

interface DailyForecastRequest {
  forecast: {
    hour: DailyForecastItem[]
  }[]
}

export function DailyForecastTimeLine({ forecast }: DailyForecastRequest) {
  return (
    <>
      <Carousel className="flex items-center xl:gap-12">
        <CarouselContent className='gap-5'>
          {forecast[0].hour
            .filter((_, index) => [4, 8, 12, 16, 20].includes(index))
            .map(item => {
              return (
                <CarouselItem
                  key={item.time_epoch}
                  className="flex flex-col gap-4 basis-1/4 rounded items-center text-center xl:gap-2 md:basis-1/5 lg:basis-1/6"
                >
                  <div className="font-semibold">
                    {new Date(item.time.replace(' ', 'T')).toLocaleTimeString(
                      'pt-BR',

                      {
                        hour: '2-digit',
                        minute: '2-digit',
                        hour12: true
                      }
                    )}
                  </div>

                  <img className="size-18" src={item.condition.icon} alt="" />

                  <div>{Math.round(item.temp_c)}°C</div>
                </CarouselItem>
              )
            })}
        </CarouselContent>
      </Carousel>
    </>
  )
}
