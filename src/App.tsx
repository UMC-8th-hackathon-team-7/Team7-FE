import { createBrowserRouter, RouterProvider } from "react-router-dom";
import DefaultLayout from "./layouts/DefaultLayout";
import Board from "./pages/Board";

const router = createBrowserRouter([
  {
    path: "/",
    element: <DefaultLayout />,
    children: [
      {
        path: "board",
        element: <Board />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
