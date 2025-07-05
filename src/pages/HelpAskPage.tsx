import { Header } from "@/components/commons/Header";
import { SectionHeader } from "@/components/commons/SectionHeader";
import CategoryBtn from "@/components/board/CategoryBtn";
import { Input } from "@/components/commons/Input";
import { ProfileCard } from "@/components/ProfileCard";
import { Button } from "@/components/commons/Button"
import { useState } from "react";

const categories = [
  { key: "move", label: "외출 및 이동", icon: "/icons/steps.svg" },
  { key: "life", label: "일상 생활", icon: "/icons/person.svg" },
  { key: "home", label: "주거 환경", icon: "/icons/chair.svg" },
  { key: "hobby", label: "취미 및 사회활동", icon: "/icons/exercise.svg" },
  { key: "care", label: "소통 및 케어", icon: "/icons/waving_hand.svg" },
];

const HelpAskPage = () => {
    const [selected, setSelected] = useState<string | null>(null);
    const [selectedTarget, setSelectedTarget] = useState<string | null>(null);

    const handleTargetToggle = (name: string) => {
  setSelectedTarget(prev => (prev === name ? null : name));
};
    return (
        <div className="w-full max-w-md mx-auto px-4 py-6 flex flex-col gap-6 bg-white h-screen overflow-y-auto">
            <Header title="도움 요청" />
            <SectionHeader title="분류" subtitle="하나만 선택해주세요"/>
            <div className="flex flex-wrap gap-2">
  {categories.map(({ key, label, icon }) => (
    <CategoryBtn
      key={key}
      active={selected === key}
      onClick={() => setSelected(key)}
    >
      <img src={icon} alt={label} className="w-4 h-4" />
      {label}
    </CategoryBtn>
  ))}
</div>
            <Input
  label="도움 제목"
  placeholder = "20자 이하로 간단하게 작성해주세요"
  onChange={(val) => console.log(val)}
/>
            <SectionHeader title="제목 및 내용" />
            <Input
  label="도움 내용"
  placeholder = "도움이 필요한 내용, 날짜, 특이사항을 자세하게 작성해주세요"
  onChange={(val) => console.log(val)}
/>
            <SectionHeader title="장소 및 일시" />
            <Input
  label="장소"
  placeholder = "역 주변으로 간단하게 작성해주세요"
  onChange={(val) => console.log(val)}
/>
 <Input
  label="일시"
  placeholder = "날짜와 시간을 입력해주세요"
  onChange={(val) => console.log(val)}
/>
            <SectionHeader title="도움 받을 사람" subtitle="한 명만 선택해주세요" />

            <ProfileCard
  type="target"
  imageUrl="/icons/target.png"
  name="이수성"
  age={20}
  region="서울 마포구"
  note="계단이 많으면 어려워해요ㅠㅠ"
  disabilityType="하지"
  disabilityLevel={5}
  selectable
  selected={selectedTarget === "이수성"}
  onSelectToggle={() => handleTargetToggle("이수성")}
/>

<ProfileCard
  type="target"
  imageUrl="/icons/target.png"
  name="김영희"
  age={22}
  region="서울 은평구"
  note="오른손을 쓰기 어려워요"
  disabilityType="우측 상지"
  disabilityLevel={4}
  selectable
  selected={selectedTarget === "김영희"}
  onSelectToggle={() => handleTargetToggle("김영희")}
/>

            <Button text="채팅하기" onClick={() => console.log("clicked")} />
        </div>
    );
};

export default HelpAskPage