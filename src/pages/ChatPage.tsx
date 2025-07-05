import { useEffect, useRef, useState } from "react";
import ChatHeader from "../components/chat/ChatHeader";
import TabBar from "../components/chat/TabBar";
import Content from "../components/chat/Content";
import { chatItems } from "../contexts/ChatContext";

function ChatPage() {
  const [activeIndex, setActiveIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const focusInput = () => inputRef.current?.focus();
    window.addEventListener("focus", focusInput);
    return () => window.removeEventListener("focus", focusInput);
  }, []);

  const unreadBadgeCounts = [
    chatItems.reduce((sum, item) => sum + item.unreadCount, 0),
  ];

  return (
    <div className="flex flex-col h-screen bg-white">
      <ChatHeader />

      <TabBar
        activeIndex={activeIndex}
        setActiveIndex={setActiveIndex}
        unreadBadgeCounts={unreadBadgeCounts}
      />

      <Content activeIndex={activeIndex} chatItems={chatItems} />
    </div>
  );
}

export default ChatPage;
