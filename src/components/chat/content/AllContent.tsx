// src/components/chat/AllContent.tsx
import styled from "styled-components";
import ListItem from "./ListItem";

interface ChatItem {
  profile: string;
  title: string;
  name: string;
  message: string;
  minutesAgo: number;
  unreadCount: number;
}

interface Props {
  chatItems: ChatItem[];
}

export default function AllContent({ chatItems }: Props) {
  return (
    <ContentArea>
      {chatItems.map((item, idx) => (
        <ListItem key={idx} {...item} />
      ))}
    </ContentArea>
  );
}

const ContentArea = styled.div`
  /* 필요 시 스타일 추가 */
`;
