import React from "react";

interface ProfileCardProps {
  imageUrl: string;
  name: string;
  age: number;
  region: string;
  type: "guardian" | "target";
  badge?: string;
  note?: string;
  disabilityType?: string;
  disabilityLevel?: number;
  selectable?: boolean;
  selected?: boolean;
  onSelectToggle?: () => void;
}

export const ProfileCard: React.FC<ProfileCardProps> = ({
  imageUrl,
  name,
  age,
  region,
  type,
  badge,
  note,
  disabilityType,
  disabilityLevel,
  selectable = false,
  selected = false,
  onSelectToggle,
}) => {
  return (
    <div className="px-4 py-3 bg-white rounded-md shadow-sm w-full">
  <div className="flex items-start gap-[20px]">
    {/* 이미지 */}
    <div className="flex-shrink-0">
      <img
        src={imageUrl}
        alt={`${name} 프로필 이미지`}
        className="w-12 h-12 rounded-full object-cover"
      />
    </div>

    {/* 텍스트 */}
    <div className="flex flex-col flex-1">
      {/* 나이 | 지역 */}
      <p className="text-[12px] text-content-assistive leading-[18px] tracking-[-0.24px]">
        {age}세 | {region}
      </p>

      {/* 이름 + 버튼/뱃지 */}
      <div className="flex items-center justify-between">
        <p className="text-[18px] font-medium text-content-base">{name}</p>
        {type === "guardian" && badge && (
          <div className="px-2 py-1 bg-[#EDF3FF] text-[#4288EB] rounded-full text-[12px] font-medium whitespace-nowrap">
            {badge}
          </div>
        )}
        {type === "target" && selectable && (
          <button
            onClick={onSelectToggle}
            className="w-[20px] h-[20px] rounded-full border-2 border-[#4288EB] flex items-center justify-center"
          >
            {selected && (
              <div className="w-[20px] h-[20px] bg-[#4288EB] rounded-full" />
            )}
          </button>
        )}
      </div>
    </div>
  </div>

  {/* ✅ 추가 정보는 텍스트 영역 바깥에 위치, 패딩으로 정렬 맞춤 */}
  {type === "target" && (
  <div className="mt-[12px] flex flex-col gap-3">
    {note && (
      <p className="text-[12px] text-gray-700">
        <span className="mr-[25px] font-medium text-gray-600">특이사항</span>
        {note}
      </p>
    )}
    {disabilityType && (
      <p className="text-[12px] text-gray-700">
        <span className="mr-[25px] font-medium text-gray-600">장애 부위</span>
        {disabilityType}
      </p>
    )}
    {disabilityLevel && (
      <p className="text-[12px] text-gray-700">
        <span className="mr-[25px] font-medium text-gray-600">장애 정도</span>
        {disabilityLevel}
      </p>
    )}
  </div>
)}
</div>
  );
};