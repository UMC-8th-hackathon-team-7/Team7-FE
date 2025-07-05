import React from "react";

interface HelpInfoCardProps {
  title: string;
  description: string;
  category: string;
  location: string;
  time: string;
}

export const HelpInfoCard: React.FC<HelpInfoCardProps> = ({
  title,
  description,
  category,
  location,
  time,
}) => {
  return (
    <div className="flex flex-col justify-center items-center px-4 py-4 gap-2 w-full bg-gray-50 rounded-md">
      {/* 제목 */}
      <h2
        className="text-[20px] font-bold leading-[28px] tracking-[-0.4px] text-content-base w-full"
        style={{ fontFamily: 'var(--Family, "SUIT Variable")' }}
      >
        {title}
      </h2>

      {/* 내용 */}
      <p
        className="text-[16px] font-medium leading-[28.8px] tracking-[-0.48px] text-content-additive w-full"
        style={{ fontFamily: 'var(--Family, "SUIT Variable")' }}
      >
        {description}
      </p>

      {/* 정보 항목 */}
      <div className="flex flex-col px-4 py-3 space-y-2 w-full bg-white rounded-md mt-[10px] mb-[10px] shadow-sm">
        <InfoItem icon="category.svg" label="분류" value={category} />
        <InfoItem icon="location_on.svg" label="장소" value={location} />
        <InfoItem icon="calendar_clock.svg" label="일시" value={time} />
      </div>
    </div>
  );
};

// 하위 항목 구성
interface InfoItemProps {
  icon: string;
  label: string;
  value: string;
}

const InfoItem: React.FC<InfoItemProps> = ({ icon, label, value }) => (
  <div className="flex items-center">
    <img
        src={`/icons/${icon}`}
        alt={`${label} 아이콘`}
        className="w-4 h-4"
      />
      <div className="flex items-center gap-[50px]">
    <span className="text-sm text-gray-600 font-medium">{label}</span>
    <span className="text-sm text-gray-800">{value}</span>
    </div>
  </div>
);