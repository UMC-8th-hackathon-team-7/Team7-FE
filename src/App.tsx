import { createBrowserRouter, RouterProvider } from "react-router-dom";
import DefaultLayout from "./layouts/DefaultLayout";
import HelpViewPage from "@/pages/HelpViewPage";
import HelpAskPage from "@/pages/HelpAskPage"

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
      }
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
