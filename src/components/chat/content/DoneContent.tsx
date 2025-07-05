import styled from "styled-components";
import { theme } from "../../../styles/theme";

export default function DoneContent() {
  return (
    <ContentArea>
      <ContentText>완료 탭 내용입니다.</ContentText>
    </ContentArea>
  );
}

const ContentArea = styled.div`
  padding: 16px;
`;

const ContentText = styled.div`
  font-size: ${theme.fontSize.body};
  font-weight: ${theme.font.Regular};
  color: var(--color-base);
`;
