// src/layouts/DefaultLayout.tsx
import { Outlet } from "react-router-dom";
import BottomBar from "../components/BottomBar";

const DefaultLayout = () => {
  return (
    <div className="flex flex-col w-screen max-w-[393px] min-h-screen mx-auto">
      <div className="flex-1 overflow-auto">
        <Outlet />
      </div>
      <BottomBar />
    </div>
  );
};

export default DefaultLayout;