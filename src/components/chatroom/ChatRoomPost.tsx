// src/components/chatroom/ChatRoomPost.tsx
import { useParams, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { theme } from "../../styles/theme";
import { chatItems } from "../../contexts/ChatContext";

function ChatHeader() {
    const { userId, postId } = useParams();
    const navigate = useNavigate();
    const user = chatItems.find((item) => item.id === userId);

    const handleRequestViewClick = () => {
        navigate(`/post/${postId}`);
    };

    return (
        <HeaderWrapper>
            <img src="/icons/steps.svg" alt="steps" />
            
            <LabelTitleContainer>
                <Label>외출 및 이동</Label>
                <Title>{user?.title}</Title>
            </LabelTitleContainer>

            <RequestViewButton onClick={handleRequestViewClick}>
                <img src="/icons/open_in_new.svg" alt="open_in_new" />
                <LabelTitle>요청 보기</LabelTitle>
            </RequestViewButton>
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

    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
`;

const LabelTitleContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 12px;
    padding: 0 4px;
    min-width: 233px;
    margin-right: 12px;
`;

const Label = styled.div`
    font-weight: ${theme.font.Weak};
    font-size: ${theme.fontSize.footnote};
    line-height: ${theme.lineHeight.footnote};
    letter-spacing: ${theme.letterSpacing.footnote};
    color: var(--content-assistive);
`;

const LabelTitle = styled.div`
    font-weight: ${theme.font.Regular};
    font-size: ${theme.fontSize.callout};
    line-height: ${theme.lineHeight.callout};
    letter-spacing: ${theme.letterSpacing.callout};
    color: var(--content-assistive);
    min-width: 52px;
    text-align: center;
    padding: 0 4px;
`;

const Title = styled.div`
    font-weight: ${theme.font.Regular};
    font-size: ${theme.fontSize.body};
    line-height: ${theme.lineHeight.body};
    letter-spacing: ${theme.letterSpacing.body};
    color: var(--content-base);
`;

const RequestViewButton = styled.button`
    display: flex;
    align-items: center;
    background: none;
    border: none;
    cursor: pointer;
    padding: 0;
`;
