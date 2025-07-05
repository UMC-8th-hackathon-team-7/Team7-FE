import { useParams, useNavigate } from "react-router-dom";
import { HelpInfoCard } from "@/components/HelpInfoCard";
import { ProfileSection } from "@/components/ProfileSection";
import { Header } from "@/components/commons/Header";
import { Button } from "@/components/commons/Button"
import { useHelpStore } from "@/store/helpStore";

// 필요시 Props로 API 데이터 받아서 넘겨줄 수도 있음
const HelpViewPage = () => {
    const { id } = useParams<{ id: string }>();
    const helpData = useHelpStore((state) => state.getHelpById(id || ""));
    const navigate = useNavigate();

  if (!helpData) return <div className="p-4 text-center">해당 도움 요청을 찾을 수 없습니다.</div>;
  return (
    <div className="w-full max-w-md mx-auto px-4 py-6 flex flex-col gap-6 bg-white min-h-screen">
        <div className="mt-[54px]">
        <Header title="도움 보기" />
        </div>
        {/* 도움 요청 정보 카드 */}
        <HelpInfoCard {...helpData} />

      {/* 프로필 섹션 (보호자 + 도움 대상자) */}
      <ProfileSection
  selectedTargetName={helpData.targetProfile.name}
/>

      <Button text="채팅하기" onClick={() => navigate("/chat")} />

    </div>
  );
};

export default HelpViewPage;