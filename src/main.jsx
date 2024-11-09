import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/Home.jsx'
import CommentPage from './pages/CommentPage.jsx'
import AppFrame from './layouts/AppFrame.jsx'
import RestaurantDetailPage from './pages/RestaurantDetailPage.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <AppFrame />,
    children: [
      { index: true, element: <Home /> },
      { path: 'comment', element: <CommentPage /> },
      {
        path: 'restaurant',
        element: <RestaurantDetailPage />,
        children: [{ index: true, element: <CommentPage /> }],
      },
    ],
  },
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
