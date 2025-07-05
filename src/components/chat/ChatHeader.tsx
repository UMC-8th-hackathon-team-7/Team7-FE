// src/components/chat/ChatHeader.tsx
import styled from "styled-components";
import { theme } from "../../styles/theme";

function ChatHeader() {
    return (
        <HeaderWrapper>
            <Title>채팅</Title>
            <img src="/icons/Primary.svg" alt="Primary" />
        </HeaderWrapper>
    );
}

export default ChatHeader;


// css
const HeaderWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    min-height: 60px;
    max-height: 60px;
    padding-left: 16px;
    padding-right: 16px;
    padding-top: 12px;
    padding-bottom: 12px;
    width: 100%;
    background-color: var(--color-root-regular);
`;

const Title = styled.div`
    padding-left: 4px;
    padding-right: 4px;
    font-family: 'SUIT', sans-serif;
    font-weight: ${theme.font.Strong};
    font-size: ${theme.fontSize.title};
    line-height: ${theme.lineHeight.title};
    letter-spacing: ${theme.letterSpacing.title};
    color: var(--color-base);
`;
