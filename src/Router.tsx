import { createBrowserRouter } from 'react-router-dom'
import { NotFound } from './screens/not-found'
import { Home } from './screens/home'
import { Location } from './screens/location'
import { ProtectedRoute } from './components/protectedRoute'

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
        element: (
          <ProtectedRoute>
            <Home />
          </ProtectedRoute>
        )
      }
    ]
  }
])
