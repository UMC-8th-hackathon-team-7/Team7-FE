import { Outlet } from "react-router-dom";

const NoBottomBarLayout = () => {
  return (
    <div className="flex flex-col w-screen max-w-[393px] h-screen mx-auto">
      <Outlet />
    </div>
  );
};

export default NoBottomBarLayout;
