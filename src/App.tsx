import { createBrowserRouter, RouterProvider } from "react-router-dom";
import DefaultLayout from "./layouts/DefaultLayout";
import Board from "./pages/Board";
import MyActivity from "./pages/my_activity/MyActivity";
import UseMileage from "./pages/my_activity/UseMileage";

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
      {
        path: "use-mileage",
        element: <UseMileage />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
