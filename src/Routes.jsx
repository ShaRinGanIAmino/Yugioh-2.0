import { Sign, Login, Market, Collection } from './pages';
import { createBrowserRouter } from 'react-router-dom';
import { MainLayout, LogLayout } from './components';

export const Unauthenticated = createBrowserRouter([
  {
    path: '/',
    element: <LogLayout />,
    children: [
      {
        path: '/',
        element: <Sign />,
      },
      {
        path: '/Sign',
        element: <Sign />,
      },
      {
        path: '/Login',
        element: <Login />,
      },
    ],
  },
]);

export const Authenticated = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        path: '/',
        element: <Market />,
      },
      {
        path: '/Market',
        element: <Market />,
      },
      {
        path: '/Collection',
        element: <Collection />,
      },
    ],
  },
]);
