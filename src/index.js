import React from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import App from './App';
import ErrorPage from './pages/ErrorPage';
import CardDetail from './pages/Detail/Detail';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
    errorElement: <ErrorPage/>
  },
  {
    path: '/card/:id',
    element: (
      <>
        <Header />
        <CardDetail />
        <Footer />
      </>
    ),
    errorElement: <ErrorPage/>
  }
]);

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
