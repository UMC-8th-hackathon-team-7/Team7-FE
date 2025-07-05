import { createBrowserRouter, RouterProvider } from "react-router-dom";
import DefaultLayout from "./layouts/DefaultLayout";
import HelpViewPage from "@/pages/HelpViewPage";
import HelpAskPage from "@/pages/HelpAskPage"
import Board from "./pages/Board";
import { useEffect } from "react";
import { useUserStore } from "@/store/userStore";
import { mockGuardian } from "./store/userStore";
import MyActivity from "./pages/my_activity/MyActivity";
import UseMileage from "./pages/my_activity/UseMileage";
import LocationPage from "./pages/LocationPage";

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
      {
        path: "map",
        element: <LocationPage />,
      },
    ],
  },
]);

function App() {
  const login = useUserStore((state) => state.login);
  useEffect(() => {
    // 페이지 진입 시 목데이터 로그인 처리
    login(mockGuardian);
  }, [login]);

  return <RouterProvider router={router} />;
}

export default App;
