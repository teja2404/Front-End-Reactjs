import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import Products from "./pages/Products";
import RootLayout from "./pages/Root";
import ErrorPage from "./pages/Error";
import ProductDetails from "./pages/ProductDetails";

//router object based code
const router = createBrowserRouter([
  // {
  //   path: "/",
  //   element: <RootLayout />,
  //   errorElement: <ErrorPage />,
  //   children: [
  //     { path: "/", element: <Home /> },
  //     { path: "/products", element: <Products /> },
  //     { path: "/products/:productId", element: <ProductDetails /> },
  //   ],
  // },
  {
    path: "",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Home /> },
      { path: "products", element: <Products /> },
      { path: "products/:productId", element: <ProductDetails /> },
    ],
  },
]);

// JSx code based

// const routeDefinitions = createRoutesFromElements(
//   <Route>
//     <Route path="/" element={<Header />}></Route>
//     <Route path="/products" element={<Products />}></Route>
//   </Route>
// );

// const router = createBrowserRouter(routeDefinitions);

function App() {
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
