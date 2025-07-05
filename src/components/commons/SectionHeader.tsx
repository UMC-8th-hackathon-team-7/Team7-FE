import React from "react";

interface SectionHeaderProps {
  text: string;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({ text }) => {
  return (
    <div className="flex items-center gap-2 flex-[1_0_0]">
      <h2
        className="text-[18px] font-medium leading-[26px] tracking-[-0.36px] text-content-base"
        style={{ fontFamily: 'var(--Family, "SUIT Variable")' }}
      >
        {text}
      </h2>
    </div>
  );
};