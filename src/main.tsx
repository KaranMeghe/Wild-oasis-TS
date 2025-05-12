/** @format */

import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import PageNotFound from './pages/PageNotFound.tsx';
import Dashboard from './pages/Dashboard.tsx';
import Bookings from './pages/Bookings.tsx';
import Cabins from './pages/Cabins.tsx';
import Users from './pages/Users.tsx';
import Settings from './pages/Settings.tsx';
import Account from './pages/Account.tsx';
import Login from './pages/Login.tsx';
import App from './App.tsx';

const AppRouter = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <PageNotFound />,
    children: [
      { index: true, element: <Dashboard /> },
      { path: 'bookings', element: <Bookings /> },
      { path: 'cabins', element: <Cabins /> },
      { path: 'users', element: <Users /> },
      { path: 'settings', element: <Settings /> },
      { path: 'account', element: <Account /> },
    ],
  },
  { path: 'login', element: <Login /> },
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={AppRouter} />
  </StrictMode>,
);
