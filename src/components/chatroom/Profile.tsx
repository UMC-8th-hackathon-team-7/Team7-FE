// src/components/chatroom/ChatRoomHeader.tsx
import { useState } from "react";
import styled from "styled-components";
import { theme } from "../../styles/theme";

interface ProfileProps {
    isMyMessage: boolean;
    onAccept: () => void;
    sendProfileAcceptedMessage?: () => void;
}

function Profile({ isMyMessage, onAccept }: ProfileProps) {

    const [accepted, setAccepted] = useState(false); // 수락 상태 관리
    const [rejected, setRejected] = useState(false);

    const handleAccept = () => {
        setAccepted(true);
        onAccept();  
    };

    const handleReject = () => {
        setRejected(true);
    };

    return (
      <ProfileWrapper isMyMessage={isMyMessage}>
        <ProfileBlock isMyMessage={isMyMessage}>
            <ProfilePicture />
  
          <UserInfo>
            <Age>21세 | 경기 화성시</Age>
            <Name>조휴일</Name>
            <PhoneNumber>010-0000-0000</PhoneNumber>
          </UserInfo>
  
          <HelpTimeBox>
            <HelpTime>72시간 도움</HelpTime>
          </HelpTimeBox>
        </ProfileBlock>
  
        {!accepted && !rejected ? (
        <>
          <TextBox>
            <Title>
              {isMyMessage ? "내 프로필을 보냈어요" : "상대방이 프로필을 보냈어요"}
            </Title>
            <SubTitle>
              {isMyMessage
                ? "상대방에게 위와 같이 표시되어요"
                : "아래 버튼을 눌러 도움을 수락하거나 거절할 수 있어요"}
            </SubTitle>
          </TextBox>

          {!isMyMessage && (
            <Content>
              <ButtonWrapper>
                <RejectButton onClick={handleReject}>거절</RejectButton>
                <AcceptButton onClick={handleAccept}>수락</AcceptButton>
              </ButtonWrapper>
              <ButtonTitle>
                수락하면 나와 도움 받을 사람 프로필이 전송되어요
              </ButtonTitle>
            </Content>
          )}
        </>
      ) : accepted ? (
        <AcceptedMessage>상대방의 도움을 수락했어요!</AcceptedMessage>
      ) : (
        <AcceptedMessage>도움을 거절했어요</AcceptedMessage>
      )}

      </ProfileWrapper>
    );
}

export default Profile;


// css

const ProfileWrapper = styled.div.withConfig({
    shouldForwardProp: (prop) => prop !== "isMyMessage",
  })<{ isMyMessage: boolean }>`
    border: 1px solid var(--border-divider-regular);
    display: flex;
    flex-direction: column;
    padding: 6px 0px;
    width: 100%;
    background-color: var(--background-root-regular);
    gap: 12px;
    border-radius: 16px;
    margin-top: 10px;
    margin-bottom: 10px;
  `;
  
  const ProfileBlock = styled.div.withConfig({
    shouldForwardProp: (prop) => prop !== "isMyMessage",
  })<{ isMyMessage: boolean }>`
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 12px 16px;
  `;

const ProfilePicture = styled.div`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background-image: url("https://randomuser.me/api/portraits/women/68.jpg");
  background-size: cover;
  background-position: center;
`;

const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
  flex: 1;
`;

const Age = styled.span`
    font-weight: ${theme.font.Weak};
    font-size: ${theme.fontSize.footnote};
    line-height: ${theme.lineHeight.footnote};
    letter-spacing: ${theme.letterSpacing.footnote};
    color: var(--content-assistive);
`;

const Name = styled.span`
    font-weight: ${theme.font.Regular};
    font-size: ${theme.fontSize.subhead};
    line-height: ${theme.lineHeight.subhead};
    letter-spacing: ${theme.letterSpacing.subhead};
    color: var(--content-base);
`;

const PhoneNumber = styled.span`
    font-weight: ${theme.font.Weak};
    font-size: ${theme.fontSize.footnote};
    line-height: ${theme.lineHeight.footnote};
    letter-spacing: ${theme.letterSpacing.footnote};
    color: var(--content-additive);
`;

const HelpTimeBox = styled.span`
    background-color: #F0F5FD;
    padding: 2px 6px;
    border-radius: 4px;
`;

const HelpTime = styled.span`
    font-weight: ${theme.font.Regular};
    font-size: ${theme.fontSize.footnote};
    line-height: ${theme.lineHeight.footnote};
    letter-spacing: ${theme.letterSpacing.footnote};
    color: var(--semantic-brand);
    white-space: nowrap;
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

const Content = styled.div`
  padding: 16px 12px;
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 8px;
`;

const AcceptButton = styled.button`
    font-weight: ${theme.font.Regular};
    font-size: ${theme.fontSize.callout};
    line-height: ${theme.lineHeight.callout};
    letter-spacing: ${theme.letterSpacing.callout};
    color: var(--semantic-success);
    background-color: #EDFAF4;
    padding: 12px 12px;
    width: 137px;
    border-radius: 8px;
    cursor: pointer;
`;

const RejectButton = styled.button`
    font-weight: ${theme.font.Regular};
    font-size: ${theme.fontSize.callout};
    line-height: ${theme.lineHeight.callout};
    letter-spacing: ${theme.letterSpacing.callout};
    color: var(--semantic-danger);
    background-color: #FFEEF1;
    padding: 12px 12px;
    width: 137px;
    border-radius: 8px;
    cursor: pointer;
`;

const ButtonTitle = styled.div`
    font-weight: ${theme.font.Weak};
    font-size: ${theme.fontSize.footnote};
    line-height: ${theme.lineHeight.footnote};
    letter-spacing: ${theme.letterSpacing.footnote};
    color: var(--content-assistive);
    padding-top: 10px;
    text-align: center;
`;

const AcceptedMessage = styled.div`
  padding: 20px 12px;
  font-weight: ${theme.font.Strong};
  font-size: ${theme.fontSize.subhead};
  line-height: ${theme.lineHeight.subhead};
  letter-spacing: ${theme.letterSpacing.subhead};
  color: var(--content-base);
  text-align: center;
`;