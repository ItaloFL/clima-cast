import { Button } from '@/components/ui/button'
import { MapPin } from 'lucide-react'

export function Location() {
  return (
    <>
      <div className="flex w-screen h-screen justify-center items-center">
        <div className="flex flex-col items-center mx-auto gap-2 justify-around bg-card border border-border h-[300px] w-[400px] p-8 rounded-md">
          <div className="flex flex-col gap-6 items-center ">
            <h1 className="font-bold text-xl ">Permissão de Localização</h1>

            <MapPin className="size-12" />
          </div>

          <Button
            className="uppercase p-3 text-sm w-[240px] h-[50px] cursor-pointer"
            variant="secondary"
          >
            Permitir localização
          </Button>
        </div>
      </div>
    </>
  )
}
