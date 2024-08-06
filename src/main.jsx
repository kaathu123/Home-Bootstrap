import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

import 'bootstrap/dist/css/bootstrap.min.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HomePage from './HomePage.jsx';
const router=createBrowserRouter([
  {
path:'/',
element:<App/>
  },
  {
path:'/home',
element:<HomePage/>
  }
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router}></RouterProvider>
)
