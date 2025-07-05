import React from "react";

interface ButtonProps {
  text: string;
  onClick?: () => void;
}

export const Button: React.FC<ButtonProps> = ({ text, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="flex justify-center items-center min-w-[56px] h-[56px] px-4 gap-1
                 rounded-[12px] backdrop-blur bg-[#4288EB]"
    >
      <span
        className="text-[16px] text-white font-medium leading-[24px] tracking-[-0.32px] text-content-elevated text-center"
        style={{ fontFamily: 'var(--Family, "SUIT Variable")' }}
      >
        {text}
      </span>
    </button>
  );
};