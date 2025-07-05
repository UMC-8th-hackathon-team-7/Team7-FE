import { ProfileCard } from "./ProfileCard";
import { SectionHeader } from "@/components/commons/SectionHeader";
import { useUserStore } from "@/store/userStore";

export const ProfileSection = () => {
  const { currentUser } = useUserStore();

  if (!currentUser) {
    return <div className="text-center text-sm text-gray-500">로그인이 필요합니다.</div>;
  }

  return (
    <div className="w-full">
      {/* 보호자 섹션 */}
      <div className="flex justify-center items-center px-2 py-3 gap-12 mb-4 bg-gray-50 rounded-t-md">
        <SectionHeader title="보호자 프로필" />
      </div>
      <ProfileCard
        type="guardian"
        imageUrl="/icons/guardian.png"
        name={currentUser.name}
        age={49} // 필요 시 사용자 정보 확장
        region="서울 마포구" // 필요 시 사용자 정보 확장
        badge="5회차 도움"
      />

      {/* 도움 대상자 섹션 */}
      <div className="flex justify-center items-center px-2 py-3 gap-12 mt-[30px] mb-2 bg-gray-50 rounded-t-md">
        <SectionHeader title="도움이 필요한 프로필" />
      </div>

      {currentUser.targetList.map((target) => (
        <ProfileCard
          key={target.name}
          type="target"
          imageUrl="/icons/target.png"
          name={target.name}
          age={target.age}
          region={target.region}
          note={target.note}
          disabilityType={target.disabilityType}
          disabilityLevel={target.disabilityLevel}
        />
      ))}
    </div>
  );
};