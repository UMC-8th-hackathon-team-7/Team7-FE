import React from "react";

interface ProfileCardProps {
  imageUrl: string;
  name: string;
  age: number;
  region: string;
  type: "guardian" | "target";
  badge?: string; // 보호자용 배지
  note?: string;  // 도움 대상자 특이사항
  disabilityType?: string;
  disabilityLevel?: number;
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
}) => {
  return (
    <div className="flex items-center justify-between px-4 py-3 gap-4 bg-white rounded-md shadow-sm w-full">
      {/* 사용자 이미지 */}
      <div className="flex-shrink-0">
        <img
          src={imageUrl}
          alt={`${name} 프로필 이미지`}
          className="w-48px h-48px rounded-full object-cover"
        />
      </div>

      {/* 텍스트 영역 */}
      <div className="flex flex-col justify-center flex-1">
        {/* 보호자 뱃지 (수평 배치) */}
        {type === "guardian" && badge && (
          <div className="flex justify-center items-center gap-2 px-2 py-1 bg-gray-100 text-gray-600 rounded-full text-xs font-medium mb-1">
            {badge}
          </div>
        )}
        
        {/* 이름 */}
        <p
          className="text-[18px] font-medium leading-[26px] tracking-[-0.36px] text-content-base"
          style={{ fontFamily: 'var(--Family, "SUIT Variable")' }}
        >
          {name}
        </p>

        {/* 나이 | 지역 */}
        <p
          className="text-[12px] font-normal leading-[18px] tracking-[-0.24px] text-content-assistive mt-0.5"
          style={{ fontFamily: 'var(--Family, "SUIT Variable")' }}
        >
          {age}세 | {region}
        </p>

         {/* 도움 대상자 정보: 특이사항, 장애 부위/정도 */}
        {type === "target" && (
          <div className="flex flex-col mt-2 gap-1 text-xs text-gray-700 leading-[18px] tracking-[-0.24px]">
            {note && <p>특이사항 {note}</p>}
            {disabilityType && <p>장애 부위 {disabilityType}</p>}
            {disabilityLevel && <p>장애 정도 {disabilityLevel}</p>}
          </div>
        )}
      </div>
    </div>
  );
};