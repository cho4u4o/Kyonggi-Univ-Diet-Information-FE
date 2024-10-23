import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/Home'
import CommentPage from './pages/CommentPage'
import AppFrame from './layouts/AppFrame'
import RestaurantDetailPage from './pages/RestaurantDetailPage'

const router = createBrowserRouter([
  {
    path: '/',
    element: <AppFrame />,
    children: [
      { index: true, element: <Home /> },
      { path: 'comment', element: <CommentPage /> },
      { path: 'restaurant', element: <RestaurantDetailPage /> },
    ],
  },
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
