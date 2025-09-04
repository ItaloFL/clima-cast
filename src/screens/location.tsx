import { Button } from '@/components/ui/button'
import { UserCurrentLocationContext } from '@/context/userCurrentLocationContext'
import { MapPin } from 'lucide-react'
import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'

export function Location() {
  const { userLocation, getUserCurrentLocation } = useContext(UserCurrentLocationContext)
  const navigate = useNavigate()

  console.log(`Verificando a userlocation: ${userLocation}`)
  const handleClickToGetUserLocation = async () => {
    try {
      await getUserCurrentLocation()
      navigate('/home')
    } catch (error) {
      console.log('deu erro au chefe')
    }
  }
  return (
    <>
      <div className="flex w-screen h-screen justify-center items-center">
        <div className="flex flex-col items-center mx-auto gap-2 justify-around bg-card border border-border h-[300px] w-[400px] p-8 rounded-md">
          <div className="flex flex-col gap-6 items-center ">
            <h1 className="font-bold text-xl ">Permissão de Localização</h1>

            <MapPin className="size-12" />
          </div>

          <Button
            onClick={handleClickToGetUserLocation}
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
