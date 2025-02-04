import { RouterProvider, createBrowserRouter } from "react-router-dom"
import {Home, About, Phones, Laptops, Login, Register, ErrorPage} from './pages'
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
              path: ':id',
              element: <h1>Phone Details</h1>,
            },
          ]
        },
        {
          path: 'laptop',
          element: <Laptops />,
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
