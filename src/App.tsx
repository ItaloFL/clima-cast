import { router } from './Router'
import { ThemeProvider } from './components/theme-provider'
import { RouterProvider } from 'react-router-dom'
import { UserCurrentLocationProvider } from './context/userCurrentLocationContext'

export function App() {
  return (
    <ThemeProvider>
      <UserCurrentLocationProvider>
        <RouterProvider router={router} />
      </UserCurrentLocationProvider>
    </ThemeProvider>
  )
}
