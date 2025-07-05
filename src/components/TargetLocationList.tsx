import React from "react";

interface TargetLocation {
  name: string;
  imageUrl: string;
  address: string;
  distance: string;
  updatedAgo: string;
}

interface Props {
  targets: TargetLocation[];
}

const TargetLocationList: React.FC<Props> = ({ targets }) => {
  return (
    <div className="w-full">
      {targets.map((target, index) => (
        <div key={index} className="flex items-center justify-between gap-2">
          {/* 왼쪽 프로필 정보 */}
          <div className="flex items-center gap-3">
            <img
              src={target.imageUrl}
              alt={`${target.name} 프로필`}
              className="w-10 h-10 rounded-full object-cover"
            />
            <div className="flex flex-col">
              <span className="text-[14px] font-semibold text-gray-900">
                {target.name}
              </span>
              <span className="text-[12px] text-gray-500 truncate w-[160px]">
                {target.address}
              </span>
            </div>
          </div>

          {/* 오른쪽 거리 및 시간 */}
          <div className="flex flex-col items-end text-right text-[12px] text-gray-500">
            <span>{target.distance}</span>
            <span>{target.updatedAgo}</span>
          </div>

          {/* 아이콘 버튼 */}
          <button className="ml-3 text-gray-400">
            <img src="/icons/refresh_circle.svg" alt="새로고침" className="w-5 h-5" />
          </button>
        </div>
      ))}
    </div>
  );
};

export default TargetLocationList;