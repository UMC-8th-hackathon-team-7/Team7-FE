import { createBrowserRouter, RouterProvider } from "react-router-dom";
import DefaultLayout from "./layouts/DefaultLayout";
import HelpViewPage from "@/pages/HelpViewPage";
import HelpAskPage from "@/pages/HelpAskPage";
import Board from "./pages/Board";
import MyActivity from "./pages/my_activity/MyActivity";
import UseMileage from "./pages/my_activity/UseMileage";
import Landing from "./pages/auth/Landing";
import NoBottomBarLayout from "./layouts/NoBottomBarLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <DefaultLayout />,
    children: [
      {
        path: "help/view/:id",
        element: <HelpViewPage />,
      },
      {
        path: "help/ask",
        element: <HelpAskPage />,
      },
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
  {
    path: "/",
    element: <NoBottomBarLayout />,
    children: [
      {
        index: true,
        element: <Landing />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
