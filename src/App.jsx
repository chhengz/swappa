import { RouterProvider, createBrowserRouter } from "react-router-dom";
import {
  Login,
  Register,
  ErrorPage,
  Home,
  About,
  Phones,
  Laptops,
  Watches,
  ProductDetails,
  IphoneDetails,
  SumsungDetails,
  LaptopDetails,
  PhoneDetails,
  WatchDetails,
} from "./pages";
import RootLayout from "./Layout/RootLayout";
import BuyLayout from "./Layout/BuyLayout";

function App() {
  const routers = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      errorElement: <ErrorPage />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "phones",
          children: [
            {
              index: true,
              element: <Phones />,
            },
            {
              path: "iphone/:id",
              element: <PhoneDetails />,
            },
            {
              path: "samsung/:id",
              element: <PhoneDetails />,
            },
            {
              path: "pixel/:id",
              element: <PhoneDetails />,
            },
          ],
        },
        {
          path: "laptop",
          children: [
            {
              index: true,
              element: <Laptops />,
            },
            {
              path: "macbook/:id",
              element: <LaptopDetails />,
            },
            {
              path: "windows/:id",
              element: <LaptopDetails />,
            },
            {
              path: "chromebook/:id",
              element: <LaptopDetails />,
            },
          ],
        },
        {
          path: "watch",
          children: [
            {
              index: true,
              element: <Watches />,
            },
            {
              path: 'apple/:id',
              element: <WatchDetails />
            },
            {
              path: 'android/:id',
              element: <WatchDetails />
            },
            {
              path: 'fitness/:id',
              element: <WatchDetails />
            }
          ]
        },
      ],
    },
    {
      path: "/about",
      element: <About />,
    },
  ]);

  return (
    <>
      <RouterProvider router={routers} />
    </>
  );
}

export default App;
