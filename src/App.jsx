import { RouterProvider, createBrowserRouter } from "react-router-dom"
import RootLayout from "./Layout/RootLayout"
import BuyLayout from "./Layout/BuyLayout"
import {Home, About, Login, Register, ErrorPage} from './pages'


function App() {
  const routers = createBrowserRouter([
    {
      path: '/login',
      element: <Login />
    },
    {
      path: '/',
      element: <Register />
    },
    {
      path: '/',
      element: <RootLayout />,
      errorElement: <ErrorPage />,
      children: [
        {
          index: true,
          element: <Home />
        },
      ]
    },
    {
      path: '/buy',
      element: <BuyLayout />,
      children: [
        {}
      ]
    },
    {
      path: '/about',
      element: <About />
    },
    {
      path: '/help'
    },
    
  ])

  return (
    <>
      <RouterProvider router={routers} />
    </>
  )
}

export default App
