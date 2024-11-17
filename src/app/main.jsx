import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { HomePage, ErrorPage, RestaurantDetailPage } from '../pages';
import { AppFrame, RestaurantDetailFrame } from './layouts';

const router = createBrowserRouter([
  {
    path: '/',
    element: <AppFrame />,
    children: [
      { index: true, element: <HomePage /> },
      {
        path: 'restaurant',
        element: <RestaurantDetailFrame />,
        children: [{ index: true, element: <RestaurantDetailPage /> }],
      },
    ],
  },
  { path: '*', element: <ErrorPage /> },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
