import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { MapPin } from 'lucide-react'

export function Location() {
  return (
    <>
      <div className="flex w-screen h-screen justify-center items-center">
        <div className="flex flex-col items-center mx-auto gap-4 justify-around bg-card border border-border h-[300px] w-[400px] p-8 rounded-md">
          <div className="flex flex-col gap-6 items-center ">
            <h1 className="font-bold text-xl ">Permissão de Localização</h1>

            <MapPin className="size-12" />
          </div>
          <Input
            type="text"
            className="p-2"
            placeholder="Digite sua localização"
          />

          <span className="block">Ou</span>

          <Button className="uppercase p-3 text-sm" variant="secondary">
            Permitir localização
          </Button>
        </div>
      </div>
    </>
  )
}
