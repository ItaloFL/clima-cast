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
}
