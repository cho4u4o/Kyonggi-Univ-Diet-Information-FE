import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/Home.jsx'
import CommentPage from './pages/CommentPage.jsx'
import AppFrame from './layouts/AppFrame.jsx'
import RestaurantDetailPage from './pages/RestaurantDetailPage.jsx'
import RestaurantDetailFrame from './layouts/RestaurantDetailFrame.jsx'
import ErrorPage from './pages/ErrorPage.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <AppFrame />,
    children: [
      { index: true, element: <Home /> },
      { path: 'comment', element: <CommentPage /> },
      {
        path: 'restaurant',
        element: <RestaurantDetailFrame />,
        children: [{ index: true, element: <RestaurantDetailPage /> }],
      },
    ],
  },
  { path: '*', element: <ErrorPage /> },
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
