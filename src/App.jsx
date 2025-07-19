import { useEffect, useState } from 'react'
import './App.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Main from './layout/Main'
import Home from './components/Home/Home'
import About from './components/About/About'

function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [
        {
          path: '/',
          element: <Home></Home>,
          // loader: () => fetch('http://localhost:7000/products')
        },
        {
          path: '/about',
          element: <About></About>
        }
      ]
    }
  ])



  return (
    <div>
      <RouterProvider router={router}></RouterProvider>

    </div>
  )
}

export default App
