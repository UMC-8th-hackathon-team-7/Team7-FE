// src/components/chat/TabBar.tsx
import styled from "styled-components";
import { theme } from "../../styles/theme";

const tabs = [
  { label: "전체" },
  { label: "도움 제공" },
  { label: "도움 요청" },
  { label: "안 읽음" },
  { label: "완료" },
];

interface TabBarProps {
  activeIndex: number;
  setActiveIndex: React.Dispatch<React.SetStateAction<number>>;
  unreadBadgeCounts?: number[];
}

function TabBar({ activeIndex, setActiveIndex, unreadBadgeCounts = [] }: TabBarProps) {
  return (
    <TabContainer>
      {tabs.map((tab, index) => (
        <TabItem
          key={index}
          $isActive={index === activeIndex}
          onClick={() => setActiveIndex(index)}
        >
          <LabelWrapper>
            {tab.label}
            {unreadBadgeCounts[index] > 0 && (
              <Badge>{unreadBadgeCounts[index]}개</Badge>
            )}
          </LabelWrapper>
        </TabItem>
      ))}
    </TabContainer>
  );
}

export default TabBar;

const TabContainer = styled.div`
  display: flex;
  overflow-x: auto;
  white-space: nowrap;
  padding: 0 8px;
  background-color: var(--background-root-regular);
  border-bottom: 1px solid var(--border-divider-regular);
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }

  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
`;

const TabItem = styled.div<{ $isActive: boolean }>`
  flex: 0 0 auto;
  font-weight: ${({ $isActive }) => ($isActive ? theme.font.Strong : theme.font.Weak)};
  font-size: ${theme.fontSize.body};
  line-height: ${theme.lineHeight.body};
  letter-spacing: ${theme.letterSpacing.body};
  color: ${({ $isActive }) =>
    $isActive ? "var(--content-base)" : "var(--content-disabled)"};
  padding: 16px;
  cursor: pointer;
  border-bottom: ${({ $isActive }) =>
    $isActive ? "2px solid var(--content-base)" : "1px solid transparent"};
  transition: all 0.2s;
`;

const LabelWrapper = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 8px;
`;

const Badge = styled.span`
  background-color: var(--background-fill-regular);
  color: var(--content-additive);
  font-size: ${theme.fontSize.footnote};
  font-weight: ${theme.font.Regular};
  line-height: ${theme.lineHeight.footnote};
  letter-spacing: ${theme.letterSpacing.footnote};
  padding: 2px 6px;
  border-radius: 4px;
  min-width: 18px;
  text-align: center;
`;
