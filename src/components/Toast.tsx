import { useEffect } from "react";
import check from "../assets/my_activity/ic_check.svg";

interface ToastProps {
  message: string;
  show: boolean;
  onClose: () => void;
}

export default function Toast({ message, show, onClose }: ToastProps) {
  useEffect(() => {
    if (show) {
      const timer = setTimeout(onClose, 3000);
      return () => clearTimeout(timer);
    }
  }, [show, onClose]);

  return (
    <div
      className={[
        "fixed top-[24px] left-1/2 transform -translate-x-1/2 z-50",
        "transition-all duration-300",
        show ? "translate-y-4 opacity-100" : "-translate-y-20 opacity-0",
      ].join(" ")}
    >
      <div
        className="flex items-center gap-[8px] px-[25.5px] py-[14px] rounded-full shadow bg-[#fff]"
        style={{ boxShadow: "0px 8px 32px 0px rgba(0, 0, 0, 0.16)" }}
      >
        <img src={check} alt="" />
        <span className="text-sm text-gray-700">{message}</span>
      </div>
    </div>
  );
}
