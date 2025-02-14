import { RouterProvider, createBrowserRouter } from "react-router-dom"
import {Login, Register, ErrorPage, Home, About, Phones, Laptops,Watches, ProductDetails, IphoneDetails, SumsungDetails } from './pages'
import RootLayout from "./Layout/RootLayout"
import BuyLayout from "./Layout/BuyLayout"


function App() {
  const routers = createBrowserRouter([

    {
      path: '/',
      element: <RootLayout />,
      errorElement: <ErrorPage />,
      children: [
        {
          index: true,
          element: <Home />
        },
        {
          path: 'phones',
          children: [
            {
              index: true,
              element: <Phones />
            },
            {
              path: 'iphone/:id',
              element: <IphoneDetails />,
            },
            {
              path: 'sumsung/:id',
              element: <SumsungDetails />,
            }
          ]
        },
        {
          path: 'laptop',
          element: <Laptops />,
        },
        {
          path: 'watch',
          element: <Watches />  
        }
      ]
    },
    {
      path: '/about',
      element: <About />
    },
    
  ])

  return (
    <>
      <RouterProvider router={routers} />
    </>
  )
}

export default App
