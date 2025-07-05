import styled from "styled-components";
import { theme } from "../../../styles/theme";

interface ListItemProps {
  profile: string;
  title: string;
  name: string;
  message: string;
  minutesAgo: number;
  unreadCount: number; // 0이면 숫자 안 보임
}

export default function ListItem({
  profile,
  title,
  name,
  message,
  minutesAgo,
  unreadCount,
}: ListItemProps) {
  return (
    <Container>
        <ProfileImg src={profile} alt={`${name} 프로필`} />
        <Content>
            <Title>{title}</Title>
            <Name>{name}</Name>
            <MessageRow>
                <Message>{message}</Message>
                |
                <Time>{minutesAgo}분 전</Time>
            </MessageRow>
        </Content>
        {unreadCount > 0 && <UnreadBadge>{unreadCount}</UnreadBadge>}
    </Container>
  );
}

// 스타일

const Container = styled.div`
  display: flex;
  align-items: center;
  padding: 12px 16px;
  border-bottom: 1px solid var(--border-divider-regular);
  background-color: var(--background-root-regular);
`;

const ProfileImg = styled.img`
  width: 48px;
  height: 48px;
  border-radius: 50%; /* 동그라미 */
  object-fit: cover;
  margin-right: 12px;
`;

const Content = styled.div`
  flex: 1; /* 가운데 영역 꽉 채움 */
  display: flex;
  flex-direction: column;
  gap: 2px;
  max-width: 271px;
`;

const Title = styled.div`
  font-weight: ${theme.font.Weak};
    font-size: ${theme.fontSize.footnote};
    line-height: ${theme.lineHeight.footnote};
    letter-spacing: ${theme.letterSpacing.footnote};
  color: var(--content-assistive);
  
    white-space: nowrap;
  overflow: hidden;    
  text-overflow: ellipsis;
`;

const Name = styled.div`
  font-weight: ${theme.font.Regular};
    font-size: ${theme.fontSize.subhead};
    line-height: ${theme.lineHeight.subhead};
    letter-spacing: ${theme.letterSpacing.subhead};
  color: var(--content-base);
`;

const MessageRow = styled.div`
  display: flex;
  justify-content: space-between;
    font-weight: ${theme.font.Weak};
    font-size: ${theme.fontSize.footnote};
    line-height: ${theme.lineHeight.footnote};
    letter-spacing: ${theme.letterSpacing.footnote};
      color: var(--content-disabled);
`;

const Message = styled.div`
  flex: 1;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  margin-right: 5px;
`;

const Time = styled.div`
  flex-shrink: 0;
    margin-left: 5px;
`;

const UnreadBadge = styled.div`
  background-color: var(--semantic-brand);
    color: var(--content-elevated);
  font-weight: ${theme.font.Regular};
    font-size: ${theme.fontSize.caption};
    line-height: ${theme.lineHeight.caption};
    letter-spacing: ${theme.letterSpacing.caption};
  min-width: 18px;
  min-height: 18px;
  border-radius: 50%;
  text-align: center;
  margin-left: 12px;
  padding: 2px;
`;

