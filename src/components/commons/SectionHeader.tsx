import React from "react";

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  title,
  subtitle,
}) => {
  return (
    <div className="flex items-center justify-between gap-2 flex-[1_0_0] w-full">
      {/* 제목 */}
      <h2
        className="text-[18px] font-medium leading-[26px] tracking-[-0.36px] text-content-base"
        style={{ fontFamily: 'var(--Family, "SUIT Variable")' }}
      >
        {title}
      </h2>

      {/* 서브타이틀 (선택적) */}
      {subtitle && (
        <span
          className="text-[14px] font-normal leading-[20px] tracking-[-0.28px] text-content-assistive text-right"
          style={{ color: "rgba(29, 38, 51, 0.6)", fontFamily: 'var(--Family, "SUIT Variable")' }}
        >
          {subtitle}
        </span>
      )}
    </div>
  );
};