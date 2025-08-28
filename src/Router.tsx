import { createBrowserRouter } from 'react-router-dom'
import { NotFound } from './screens/not-found'
import { Home } from './screens/home'
import { Location } from './screens/location'

export const router = createBrowserRouter([
  {
    path: '/',
    errorElement: <NotFound />,
    children: [
      {
        path: '/',
        element: <Location />
      },
      {
        path: '/home',
        element: <Home />
      }
    ]
  }
])
