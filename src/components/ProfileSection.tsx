import { ProfileCard } from "./ProfileCard";
import { SectionHeader } from "@/components/commons/SectionHeader";

export const ProfileSection = () => (
  <div className="w-full">
    {/* 보호자 섹션 */}
    <div className="flex justify-center items-center px-2 py-3 gap-12 mb-2 bg-gray-50 rounded-t-md">
      <SectionHeader title="보호자 프로필" />
    </div>
    <ProfileCard
      type="guardian"
      imageUrl="/icons/guardian.png"
      name="이승민"
      age={49}
      region="서울 마포구"
      badge="5회차 도움"
    />

    {/* 도움 대상자 섹션 */}
    <div className="flex justify-center items-center px-2 py-3 gap-12 mt-6 mb-2 bg-gray-50 rounded-t-md">
       <SectionHeader title="도움이 필요한 프로필" />
    </div>
    <ProfileCard
      type="target"
      imageUrl="/icons/target.png"
      name="이수성"
      age={20}
      region="서울 마포구"
      note="계단이 많으면 어려워해요ㅠㅠ"
      disabilityType="하지"
      disabilityLevel={5}
    />
  </div>
);