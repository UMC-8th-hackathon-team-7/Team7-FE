import { Outlet } from "react-router-dom";

const DefaultLayout = () => {
  return (
    <main className="w-screen max-w-[393px] min-h-screen">
      <Outlet />
    </main>
  );
};

export default DefaultLayout;