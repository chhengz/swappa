import { RouterProvider, createBrowserRouter } from "react-router-dom"
import RootLayout from "./Layout/RootLayout"
import {Home, About, ErrorPage} from './pages'



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
        }
      ]
    },
    {
      path: '/about',
      element: <About />
    }
  ])

  return (
    <>
      <RouterProvider router={routers} />
    </>
  )
}

export default App
