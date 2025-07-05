// src/components/chatroom/ChatRoomHeader.tsx
import { useParams, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { theme } from "../../styles/theme";
import { chatItems } from "../../contexts/ChatContext";

function ChatHeader() {
    const { userId } = useParams();
    const user = chatItems.find((item) => item.id === userId);
    const navigate = useNavigate();
    
    const handleBackClick = () => {
        navigate("/chat");
    };

    return (
        <HeaderWrapper>
            <img src="/icons/arrow_back.svg" alt="arrow_back" onClick={handleBackClick} style={{ cursor: "pointer" }} />
            <Title>{user?.name}</Title>
        </HeaderWrapper>
    );
}

export default ChatHeader;


// css
const HeaderWrapper = styled.div`
    display: flex;
    align-items: center;
    min-height: 60px;
    max-height: 60px;
    padding-left: 16px;
    padding-right: 16px;
    padding-top: 12px;
    padding-bottom: 12px;
    width: 100%;
    background-color: var(--background-root-regular);
`;

const Title = styled.div`
    min-width: 208px;
    text-align: center;
    font-weight: ${theme.font.Regular};
    font-size: ${theme.fontSize.subhead};
    line-height: ${theme.lineHeight.subhead};
    letter-spacing: ${theme.letterSpacing.subhead};
    color: var(--content-base);
    margin-left: 53px;
`;
