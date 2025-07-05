import AllContent from "./content/AllContent";
import HelpProvideContent from "./content/HelpProvideContent";
import HelpRequestContent from "./content/HelpRequestContent";
import UnreadContent from "./content/UnreadContent";
import DoneContent from "./content/DoneContent";
import type { ChatItem } from "../../pages/ChatPage";

interface ContentProps {
  activeIndex: number;
  chatItems: ChatItem[];  // 이 타입은 ChatPage에서 정의한 ChatItem 타입과 맞춰야 합니다.
}

function Content({ activeIndex, chatItems }: ContentProps) {
  switch (activeIndex) {
    case 0:
      return <AllContent chatItems={chatItems} />;  // 필수 props 전달
    case 1:
      return <HelpProvideContent />;
    case 2:
      return <HelpRequestContent />;
    case 3:
      return <UnreadContent />;
    case 4:
      return <DoneContent />;
    default:
      return null;
  }
}

export default Content;
