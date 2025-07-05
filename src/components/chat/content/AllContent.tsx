// src/components/chat/AllContent.tsx
import styled from "styled-components";
import ListItem from "./ListItem";
import type { ChatItem } from "../../../contexts/ChatContext";

interface Props {
    chatItems: ChatItem[];
    onItemClick: (userId: string) => void;
}

export default function AllContent({ chatItems, onItemClick }: Props) {
    return (
        <ContentArea>
            {chatItems.map((item, idx) => (
                <div key={item.id} onClick={() => onItemClick(item.id)} style={{ cursor: "pointer" }}>
                    <ListItem key={idx} {...item} />
                </div>
            ))}
        </ContentArea>
    );
}

const ContentArea = styled.div`
    /* 필요 시 스타일 추가 */
`;
