import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import Header from "./Pages/Header/Header";
import Shop from "./Pages/Shop/Shop";
import Main from "./Layout/Main";
import About from "./Pages/About/About";
import Notfound from "./Pages/Notfound/Notfound";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
          path: "/",
          loader: () => fetch("products.json"),
          element: <Shop></Shop>,
        },
        {
          path: "/about",
          element: <About></About>,
        },
      ],
    },

    {
      path: "*",
      element: <Notfound></Notfound>,
    },
  ]);
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
