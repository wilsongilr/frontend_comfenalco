import { createBrowserRouter, RouterProvider, } from "react-router-dom";
import Movies from "./pages/Movies";
import DetailMovies from "./pages/DetailMovies";

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Movies />,
    },
    {
      path: "/description/:id",
      element: <DetailMovies />,
    },
  ]);


  return (
    <div className="container">
      <RouterProvider router={router} />
    </div>

  )
}

export default App
