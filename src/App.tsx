import { router } from './Router'
import { ThemeProvider } from './components/theme-provider'
import { RouterProvider } from 'react-router-dom'

export function App() {
  return (
    <ThemeProvider>
      <RouterProvider router={router} />
    </ThemeProvider>
  )
}
