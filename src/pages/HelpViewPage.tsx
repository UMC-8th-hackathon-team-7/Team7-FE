import { useParams } from "react-router-dom";
import { HelpInfoCard } from "@/components/HelpInfoCard";
import { ProfileSection } from "@/components/ProfileSection";
import { Header } from "@/components/commons/Header";
import { Button } from "@/components/commons/Button"

// 필요시 Props로 API 데이터 받아서 넘겨줄 수도 있음
const HelpViewPage = () => {
    const { id } = useParams<{ id: string }>();
    const helpDataMap: Record<string, any> = {
    "123": {
      title: "병원 이동 도와주실 분 찾습니다!",
      description: "수성이가 귀가 아프다고 하네요ㅠㅠ...",
      category: "외출 및 이동",
      location: "공덕역 연세이비인후과",
      time: "7월 5일 12시 ~ 14시",
    },
    "456": {
      title: "동사무소까지 함께 가주실 분 계신가요?",
      description: "장애인 등록 서류 제출하러 갑니다.",
      category: "공공업무 동행",
      location: "마포구청 민원실",
      time: "7월 8일 10시 ~ 11시",
    },
  };

  const helpData = helpDataMap[id || "123"];

  return (
    <div className="w-full max-w-md mx-auto px-4 py-6 flex flex-col gap-6 bg-white min-h-screen">
        <Header title="도움 보기" />

        {/* 도움 요청 정보 카드 */}
        <HelpInfoCard {...helpData} />

      {/* 프로필 섹션 (보호자 + 도움 대상자) */}
      <ProfileSection />

      <Button text="채팅하기" onClick={() => console.log("clicked")} />

    </div>
  );
};

export default HelpViewPage;