// src/pages/ChatPage.tsx
import { useEffect, useRef, useState } from "react";
import ChatHeader from "../components/chat/ChatHeader";
import TabBar from "../components/chat/TabBar";
import Content from "../components/chat/Content";

export interface ChatItem {
    profile: string;
    title: string;
    name: string;
    message: string;
    minutesAgo: number;
    unreadCount: number;
}

const chatItems = [
  {
    profile: "https://randomuser.me/api/portraits/women/68.jpg",
    title: "안녕하세요, 문의드립니다",
    name: "홍길동",
    message: "어제 문의하신 내용에 대해 답변드립니다.",
    minutesAgo: 5,
    unreadCount: 2,
  },
  {
    profile: "https://randomuser.me/api/portraits/men/32.jpg",
    title: "회의 일정 확인 요청어쩌구어쩌구어쩌구어쩌구어쩌구어쩌구어쩌구어쩌구어쩌구",
    name: "김철수",
    message: "내일 오전 회의 일정 확인 부탁드립니다.어쩌구어쩌구어쩌구어쩌구어쩌구",
    minutesAgo: 12,
    unreadCount: 0,
  },
  {
    profile: "https://randomuser.me/api/portraits/men/10.jpg",
    title: "병원 이동 도와주실 분 찾습니다!",
    name: "노시환",
    message: "어쩌구저쩌구어쩌구저쩌구어저쩌구ㅠㅠ",
    minutesAgo: 87,
    unreadCount: 4,
  },
  // ... 더 많은 데이터
];

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
