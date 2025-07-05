import { Header } from "@/components/commons/Header";
import { SectionHeader } from "@/components/commons/SectionHeader";
import CategoryBtn from "@/components/board/CategoryBtn";
import { Input } from "@/components/commons/Input";
import { ProfileCard } from "@/components/ProfileCard";
import { Button } from "@/components/commons/Button"
import { useHelpStore } from "@/store/helpStore";
import { useUserStore } from "@/store/userStore";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";


const categories = [
  { key: "move", label: "외출 및 이동", icon: "/icons/steps.svg" },
  { key: "life", label: "일상 생활", icon: "/icons/person.svg" },
  { key: "home", label: "주거 환경", icon: "/icons/chair.svg" },
  { key: "hobby", label: "취미 및 사회활동", icon: "/icons/exercise.svg" },
  { key: "care", label: "소통 및 케어", icon: "/icons/waving_hand.svg" },
];

const targetList = [
  {
    name: "이수성",
    age: 20,
    region: "서울 마포구",
    note: "계단이 많으면 어려워해요ㅠㅠ",
    disabilityType: "하지",
    disabilityLevel: 5,
  },
  {
    name: "김영희",
    age: 22,
    region: "서울 은평구",
    note: "오른손을 쓰기 어려워요",
    disabilityType: "우측 상지",
    disabilityLevel: 4,
  },
  {
    name: "김뭐뭐",
    age: 22,
    region: "서울 강북구",
    note: "왼손을 쓰기 어려워요",
    disabilityType: "좌측 상지",
    disabilityLevel: 4,
  },
];

const HelpAskPage = () => {
     const [selected, setSelected] = useState<string | null>(null);
  const [selectedTarget, setSelectedTarget] = useState<string | null>(null);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [location, setLocation] = useState("");
  const [time, setTime] = useState("");

   const { currentUser } = useUserStore();
  const { setHelp } = useHelpStore();
  const navigate = useNavigate();
  
  if (!currentUser) return <div className="p-4 text-center">로그인이 필요합니다.</div>;

    const handleTargetToggle = (name: string) => {
  setSelectedTarget(prev => (prev === name ? null : name));
};

const handleSubmit = () => {
    if (!title || !description || !location || !time || !selected || !selectedTarget) {
      alert("모든 정보를 입력해주세요.");
      return;
    }

    const target = targetList.find((t) => t.name === selectedTarget);
    if (!target) return;

    const id = uuidv4(); 

    setHelp({
      id,
      title,
      description,
      category: categories.find((c) => c.key === selected)?.label || "",
      location,
      time,
      targetProfile: target,
    });

     navigate(`/help/view/${id}`);
  };

    return (
        <div className="w-full max-w-md mx-auto px-4 py-6 flex flex-col gap-6 bg-white h-screen overflow-y-auto pb-[100px]">
            <div className="flex items-center gap-2">
              <img src="/icons/arrow_back.svg" alt="arrow_back" className="cursor-pointer" onClick={() => navigate(-1)} />
              <Header title="도움 요청" />
            </div>
            <SectionHeader title="분류" subtitle="하나만 선택해주세요"/>
            <div className="flex flex-wrap gap-[8px]">
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
            <SectionHeader title="제목 및 내용" />
            <Input
  label="도움 제목"
  placeholder = "20자 이하로 간단하게 작성해주세요"
  onChange={(val) => setTitle(val)}
/>
            <Input
  label="도움 내용"
  placeholder = "도움이 필요한 내용, 날짜, 특이사항을 자세하게 작성해주세요"
  onChange={(val) => setDescription(val)}
/>
            <SectionHeader title="장소 및 일시" />
            <Input
  label="장소"
  placeholder = "역 주변으로 간단하게 작성해주세요"
  onChange={(val) => setLocation(val)}
/>
 <Input
  label="일시"
  placeholder = "날짜와 시간을 입력해주세요"
  onChange={(val) => setTime(val)}
/>
            <SectionHeader title="도움 받을 사람" subtitle="한 명만 선택해주세요" />

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
          selectable
          selected={selectedTarget === target.name}
          onSelectToggle={() => handleTargetToggle(target.name)}
        />
      ))}
            <Button text="등록하기" onClick={handleSubmit}/>
        </div>
    );
};

export default HelpAskPage