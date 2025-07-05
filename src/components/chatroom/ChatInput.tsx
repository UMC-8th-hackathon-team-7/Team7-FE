// src/components/chatroom/ChatInput.tsx
import styled from "styled-components";
import type { RefObject } from "react";
import { theme } from "../../styles/theme";

interface ChatInputProps {
  input: string;
  setInput: (value: string) => void;
  inputRef: RefObject<HTMLInputElement | null>;
  handleKeyPress: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  sendMessage: () => void;
}

const ChatInput = ({
  input,
  setInput,
  inputRef,
  handleKeyPress,
  sendMessage,
}: ChatInputProps) => {

  const handleDeleteClick = () => {
    setInput("");
    inputRef.current?.focus(); // 삭제 후 입력창에 포커스도 줌
  };

  return (
    <InputContainer>
        <img src="/icons/profile.svg" alt="profile" />

        <InputWrapper>
            <InputField
                type="text"
                ref={inputRef}
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyUp={handleKeyPress}
                placeholder="메시지를 입력해주세요"
            />
            <img src="/icons/delete.svg" alt="delete" onClick={handleDeleteClick} style={{ cursor: "pointer" }} />
        </InputWrapper>
        
        <SendButton onClick={sendMessage}>
            <img src="/icons/send.svg" alt="send" style={{ cursor: "pointer" }} />
        </SendButton>
    </InputContainer>
  );
};

export default ChatInput;

const InputContainer = styled.div`
  width: 100%;
  display: flex;
  padding: 12px 16px;
  gap: 12px;
  border-radius: 16px 16px 0px 0px;
  border-top: 1px solid var(--border-divider-regular);
`;

const InputWrapper = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  background-color: var(--background-fill-regular);
  border-radius: 12px;
  padding: 0px 12px;
  gap: 8px;

  font-weight: ${theme.font.Regular};
    font-size: ${theme.fontSize.body};
    line-height: ${theme.lineHeight.body};
    letter-spacing: ${theme.letterSpacing.body};
    color: var(--content-assistive);
`;

const InputField = styled.input`
  flex: 1;
  padding: 12px 16px;
`;

const SendButton = styled.button`
`;
