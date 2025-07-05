import { Header } from "@/components/commons/Header";
import { SectionHeader } from "@/components/commons/SectionHeader";
import { Input } from "@/components/commons/Input";
import { Button } from "@/components/commons/Button"

const HelpAskPage = () => {
    return (
        <div className="w-full max-w-md mx-auto px-4 py-6 flex flex-col gap-6 bg-white min-h-screen">
            <Header title="도움 요청" />
            <SectionHeader title="분류" />
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
            <Button text="채팅하기" onClick={() => console.log("clicked")} />
        </div>
    );
};

export default HelpAskPage