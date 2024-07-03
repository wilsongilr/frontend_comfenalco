import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Movies from "./pages/Movies";
import DetailMovies from "./pages/DetailMovies";
import Error404 from "./pages/Error404";

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
    {
      path: "*",
      element: <Error404 />,
    },
  ]);

  return (
    <div className="container">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
