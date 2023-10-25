import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, redirect, RouterProvider } from 'react-router-dom'

import Login from '@routes/login'
import Main from '@routes/main'

import './index.css'

const router = createBrowserRouter([
  {
    path: '/main',
    element: <Main />,
  },
  {
    path: '/login',
    element: <Login />,
  },
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
