// src/layouts/DefaultLayout.tsx
import { Outlet } from "react-router-dom";
import BottomBar from "../components/BottomBar";

const DefaultLayout = () => {
  return (
    <div className="flex flex-col w-screen max-w-[393px] h-screen mx-auto">
      <Outlet />
      <BottomBar />
    </div>
  );
};

export default DefaultLayout;
