import { UserCurrentLocationContext } from '@/context/userCurrentLocationContext'
import { JSX, useContext } from 'react'
import { Navigate } from 'react-router-dom'

export function ProtectedRoute({ children }: { children: JSX.Element }) {
  const { userLocation } = useContext(UserCurrentLocationContext)

  console.log(userLocation)
  if (!userLocation) {
    return <Navigate to="/" replace />
  }

  return children
}
