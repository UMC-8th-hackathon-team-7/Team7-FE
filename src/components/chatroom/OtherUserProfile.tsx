import styled from "styled-components";
import { theme } from "../../styles/theme";

interface OtherUserProfileProps {
  isMyMessage: boolean;
}

const OtherUserProfile = ({ isMyMessage }: OtherUserProfileProps) => {
  return (
    <ProfileWrapper isMyMessage={isMyMessage}>
      <ProfileInfo>
        <ProfilePicture />
        <UserInfo>
          <Name>조휴일</Name>
          <AgeAndLocation>21세 | 경기 화성시</AgeAndLocation>
          <PhoneNumber>010-0000-0000</PhoneNumber>
        </UserInfo>
        <HelpTimeBox>
            <HelpTime>보호자</HelpTime>
        </HelpTimeBox>
      </ProfileInfo>

      <ProfileInfo>
        <ProfilePicture />
        <UserInfo>
          <Name>이수성</Name>
          <AgeAndLocation>20세 | 서울 마포구</AgeAndLocation>
        </UserInfo>
        <HelpTimeBox2>
            <HelpTime2>도움 받을 사람</HelpTime2>
        </HelpTimeBox2>

        <ContentWrapper>
            <AddInfo>특이사항</AddInfo>
            <AddInfo2>계단이 많으면 어려워해요ㅠㅠ</AddInfo2>
        </ContentWrapper>

        <ContentWrapper>
            <AddInfo>특이사항</AddInfo>
            <AddInfo2>계단이 많으면 어려워해요ㅠㅠ</AddInfo2>
        </ContentWrapper>

        <ContentWrapper>
            <AddInfo>특이사항</AddInfo>
            <AddInfo2>계단이 많으면 어려워해요ㅠㅠ</AddInfo2>
        </ContentWrapper>

      </ProfileInfo>

      <TextBox>
        <Title>상대방이 프로필을 보냈어요</Title>
        <SubTitle>도움이 끝나면 보호자가 완료 상태로 표시해요</SubTitle>
      </TextBox>

    </ProfileWrapper>
  );
};

export default OtherUserProfile;

// Styled Components

const ProfileWrapper = styled.div<{ isMyMessage: boolean }>`
  border: 1px solid var(--border-divider-regular);
  background-color: var(--background-root-regular);
  border-radius: 16px;
  padding: 12px 16px;
  color: var(--content-base);
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const TextBox = styled.div`
  padding: 10px 4px;
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

const ProfileInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  flex-wrap: wrap;
`;

const ProfilePicture = styled.div`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background-image: url("https://randomuser.me/api/portraits/men/75.jpg");
  background-size: cover;
  background-position: center;
`;

const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
`;

const Name = styled.span`
  font-weight: ${theme.font.Regular};
  font-size: ${theme.fontSize.subhead};
  line-height: ${theme.lineHeight.subhead};
  letter-spacing: ${theme.letterSpacing.subhead};
  color: var(--content-base);
`;

const AgeAndLocation = styled.span`
  font-weight: ${theme.font.Weak};
  font-size: ${theme.fontSize.footnote};
  line-height: ${theme.lineHeight.footnote};
  letter-spacing: ${theme.letterSpacing.footnote};
  color: var(--content-assistive);
`;

const PhoneNumber = styled.span`
  font-weight: ${theme.font.Weak};
  font-size: ${theme.fontSize.footnote};
  line-height: ${theme.lineHeight.footnote};
  letter-spacing: ${theme.letterSpacing.footnote};
  color: var(--content-additive);
`;

const HelpTimeBox = styled.span`
    background-color: var(--background-fill-regular);
    padding: 2px 6px;
    border-radius: 4px;
    margin-left: auto;
`;

const HelpTime = styled.span`
    font-weight: ${theme.font.Regular};
    font-size: ${theme.fontSize.footnote};
    line-height: ${theme.lineHeight.footnote};
    letter-spacing: ${theme.letterSpacing.footnote};
    color: var(--content-additive);
    white-space: nowrap;
`;

const HelpTimeBox2 = styled.span`
    background-color: #F0F5FD;
    padding: 2px 6px;
    border-radius: 4px;
    margin-left: auto;
`;

const HelpTime2 = styled.span`
    font-weight: ${theme.font.Regular};
    font-size: ${theme.fontSize.footnote};
    line-height: ${theme.lineHeight.footnote};
    letter-spacing: ${theme.letterSpacing.footnote};
    color: var(--semantic-brand);
    white-space: nowrap;
`;

const ContentWrapper = styled.div`
  display: flex;
  width: 100%;
  gap: 4px;
  margin-top: 8px;
`;

const AddInfo = styled.span`
  font-weight: ${theme.font.Strong};
  font-size: ${theme.fontSize.footnote};
  line-height: ${theme.lineHeight.footnote};
  letter-spacing: ${theme.letterSpacing.footnote};
  color: var(--content-base);
  padding: 4px 16px;
`;

const AddInfo2 = styled.span`
    font-weight: ${theme.font.Regular};
    font-size: ${theme.fontSize.footnote};
    line-height: ${theme.lineHeight.footnote};
    letter-spacing: ${theme.letterSpacing.footnote};
    color: var(--content-additive);
    white-space: pre-wrap;
    padding: 4px 4px;
`;
