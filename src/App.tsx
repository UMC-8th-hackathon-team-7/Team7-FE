import { createBrowserRouter, RouterProvider } from "react-router-dom";
import DefaultLayout from "./layouts/DefaultLayout";
import Board from "./pages/Board";
import MyActivity from "./pages/MyActivity";

const router = createBrowserRouter([
  {
    path: "/",
    element: <DefaultLayout />,
    children: [
      {
        path: "board",
        element: <Board />,
      },
      {
        path: "my-activity",
        element: <MyActivity />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
