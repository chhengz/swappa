import { RouterProvider, createBrowserRouter } from "react-router-dom"
import {Home, About, Phones, Login, Register, ErrorPage} from './pages'
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
          element: <Phones />
        },
        {
          path: 'laptop',
          element: <h1>Laptop</h1>,
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
