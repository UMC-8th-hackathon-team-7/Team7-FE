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
    <div className="px-4 py-3 bg-white rounded-md shadow-sm w-full">
      <div className="flex items-start gap-4">
        {/* 이미지 */}
        <div className="flex-shrink-0">
          <img
            src={imageUrl}
            alt={`${name} 프로필 이미지`}
            className="w-12 h-12 rounded-full object-cover"
          />
        </div>

        {/* 텍스트 + 뱃지 */}
        <div className="flex flex-col flex-1">
          {/* 보호자일 경우 우측 정렬 뱃지 */}
          {type === "guardian" && badge && (
            <div className="flex justify-between items-start w-full mb-1">
              <div>
                <p className="text-[12px] text-content-assistive leading-[18px] tracking-[-0.24px]" style={{ fontFamily: 'var(--Family, "SUIT Variable")' }}>
                  {age}세 | {region}
                </p>
                <p className="text-[18px] text-content-base font-medium leading-[26px] tracking-[-0.36px]" style={{ fontFamily: 'var(--Family, "SUIT Variable")' }}>
                  {name}
                </p>
              </div>
              <div className="flex items-center justify-center px-2 py-1 bg-[#EDF3FF] text-[#4288EB] rounded-full text-[12px] font-medium whitespace-nowrap ml-2">
                {badge}
              </div>
            </div>
          )}

          {/* 대상자일 경우 */}
          {type === "target" && (
            <>
              <p className="text-[12px] text-content-assistive leading-[18px] tracking-[-0.24px]" style={{ fontFamily: 'var(--Family, "SUIT Variable")' }}>
                {age}세 | {region}
              </p>
              <p className="text-[18px] text-content-base font-medium leading-[26px] tracking-[-0.36px]" style={{ fontFamily: 'var(--Family, "SUIT Variable")' }}>
                {name}
              </p>

              {/* 추가 정보 */}
              <div className="mt-2 flex flex-col gap-1">
                {note && (
                  <p className="text-[12px] text-gray-700 leading-[18px] tracking-[-0.24px]">
                    특이사항 {note}
                  </p>
                )}
                {disabilityType && (
                  <p className="text-[12px] text-gray-700 leading-[18px] tracking-[-0.24px]">
                    장애 부위 {disabilityType}
                  </p>
                )}
                {disabilityLevel && (
                  <p className="text-[12px] text-gray-700 leading-[18px] tracking-[-0.24px]">
                    장애 정도 {disabilityLevel}
                  </p>
                )}
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};