import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Profile from './components/profile';
import { Gallery } from './components/gallery'; 
import {ProfileDetail}  from './components/profiledetail';
import {Home} from './components/home';
import Login from './components/login';
import { createBrowserRouter, RouterProvider} from 'react-router-dom';
import Login2 from './components/login2';
import { ProfileInfo } from './components/profileinfo';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Login2 />,
  },
  {
    path: '/home',
    element: <Home />,
  },
  {
    path: '/profileinfo',
    element: <ProfileInfo />,
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

 