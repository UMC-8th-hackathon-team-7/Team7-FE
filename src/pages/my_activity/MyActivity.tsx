import setting from "../../assets/my_activity/ic_setting.svg";
import MyActivityDisabled from "./components/MyActivityDisabled";
import AuthContext from "../../contexts/AuthContext";
import { useContext } from "react";
import MyActivityGuardian from "./components/MyActivityGuardian";

const MyActivity = () => {
  const { userType } = useContext(AuthContext) || {};

  console.log(userType);
  return (
    <div className="flex-1 overflow-y-auto">
      <main className="mx-auto px-[16px] w-full min-h-screen bg-[var(--color-root-strong)] relative">
        <section className="flex justify-between items-center px-[4px] py-[13px] h-[60px]">
          <h1 className="text-title font-[700]">내 활동</h1>
          <button className="cursor-pointer">
            <img src={setting} alt="" />
          </button>
        </section>
        {userType === "disabled" ? (
          <MyActivityDisabled />
        ) : (
          <MyActivityGuardian />
        )}
      </main>
    </div>
  );
};

export default MyActivity;
