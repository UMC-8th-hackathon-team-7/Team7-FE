import { Header } from "@/components/commons/Header";
import { SectionHeader } from "@/components/commons/SectionHeader";
import { Button } from "@/components/commons/Button"

const HelpAskPage = () => {
    return (
        <div className="w-full max-w-md mx-auto px-4 py-6 flex flex-col gap-6 bg-white min-h-screen">
            <Header title="도움 요청" />
            <SectionHeader text="제목 및 내용" />
            <Button text="채팅하기" onClick={() => console.log("clicked")} />
        </div>
    );
};

export default HelpAskPage