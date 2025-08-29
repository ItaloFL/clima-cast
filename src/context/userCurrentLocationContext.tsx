import { createContext, ReactNode, useState } from 'react'

interface UserCurrentLocationProps {
  userLocation: UserLocationPositionType | null
  getUserCurrentLocation: () => Promise<UserLocationPositionType>
}

interface UserCurrentLocationContextProps {
  children: ReactNode
}

export const UserCurrentLocationContext = createContext(
  {} as UserCurrentLocationProps
)

interface UserLocationPositionType {
  latitude: number
  longitude: number
}

export function UserCurrentLocationProvider({
  children
}: UserCurrentLocationContextProps) {
  const [userLocation, setUserLocation] =
    useState<UserLocationPositionType | null>(null)

  const getUserCurrentLocation = (): Promise<UserLocationPositionType> => {
    return new Promise((resolve, reject) => {
      if (!navigator.geolocation) {
        const error = new Error('Geolocalização não suportada')
        console.error(error)
        reject(error)
        return
      }

      navigator.geolocation.getCurrentPosition(
        position => {
          const { latitude, longitude } = position.coords
          const location = { latitude, longitude }
          setUserLocation(location)
          resolve(location)
        },
        error => {
          console.error('Erro ao tentar pegar a localização:', error)
          reject(error)
        }
      )
    })
  }

  return (
    <UserCurrentLocationContext.Provider
      value={{
        userLocation,
        getUserCurrentLocation
      }}
    >
      {children}
    </UserCurrentLocationContext.Provider>
  )
}
