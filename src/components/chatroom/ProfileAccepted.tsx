// ProfileAccepted.tsx
import { useState } from "react";
import styled from "styled-components";
import { theme } from "../../styles/theme";

interface ProfileAcceptedProps {
  isMyMessage: boolean;
}

const ProfileAccepted = ({ isMyMessage }: ProfileAcceptedProps) => {
    const [isCompleted, setIsCompleted] = useState(false);

    const handleComplete = () => {
        setIsCompleted(true);
        // 완료 처리 로직 추가 가능
    };

  return (
    <ProfileWrapper isMyMessage={isMyMessage} >
        <TextBox>
            <Title>
              프로필을 보냈어요
            </Title>
            <SubTitle>
              도움이 끝나면 꼭 아래 버튼을 눌러 완료해주세요
            </SubTitle>
        </TextBox>
        <CompleteButton onClick={handleComplete} disabled={isCompleted} >완료</CompleteButton>
    </ProfileWrapper>
  );
};

export default ProfileAccepted;

const ProfileWrapper = styled.div<{ isMyMessage: boolean }>`
  border: 1px solid var(--border-divider-regular);
  padding: 12px;
  background-color: var(--background-root-regular);
  border-radius: 16px;
  color: var(--content-base);
`;

const TextBox = styled.div`
  padding: 12px 20px;
`;

const Title = styled.div`
    font-weight: ${theme.font.Strong};
    font-size: ${theme.fontSize.subhead};
    line-height: ${theme.lineHeight.subhead};
    letter-spacing: ${theme.letterSpacing.subhead};
    color: var(--content-base);
`;

const SubTitle = styled.div`
    font-weight: ${theme.font.Weak};
    font-size: ${theme.fontSize.small};
    line-height: ${theme.lineHeight.small};
    letter-spacing: ${theme.letterSpacing.small};
    color: var(--content-additive);
`;

const CompleteButton = styled.button`
    font-weight: ${theme.font.Regular};
    font-size: ${theme.fontSize.callout};
    line-height: ${theme.lineHeight.callout};
    letter-spacing: ${theme.letterSpacing.callout};
    color: var(--content-elevated);
    background-color: var(--semantic-brand);
    padding: 12px 12px;
    width: 305px;
    border-radius: 8px;
    cursor: pointer;
    align-items: center;

    margin: 0 auto; /* 가로 가운데 정렬 */
    display: block;

    &:disabled {
        background-color: var(--background-fill-strong);
        color: var(--content-assistive);
        cursor: not-allowed;
    }
`;