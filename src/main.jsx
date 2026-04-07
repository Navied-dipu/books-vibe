import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import { RouterProvider } from "react-router/dom";

import { router } from './router/Route';
import BookProvider from './context/BookProvider';
import { ToastContainer } from 'react-toastify';



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BookProvider>
      <ToastContainer />
      <RouterProvider router={router} />
    </BookProvider>

  </StrictMode>,
)
