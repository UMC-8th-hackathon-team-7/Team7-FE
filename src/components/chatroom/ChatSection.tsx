import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { v4 as uuidv4 } from "uuid";
import ChatInput from "./ChatInput";
import { theme } from "../../styles/theme";

const clientId = uuidv4();

const ChatSection = () => {
  const [input, setInput] = useState<string>("");
  const inputRef = useRef<HTMLInputElement>(null);
  const [socket, setSocket] = useState<WebSocket | null>(null);
  const [messages, setMessages] = useState<
    { clientId: string; text: string }[]
  >([]);

  useEffect(() => {
    const ws = new WebSocket("ws://localhost:8080");
    setSocket(ws);

    ws.onmessage = (event) => {
      const messageData = JSON.parse(event.data);
      setMessages((prevMessages) => [...prevMessages, messageData]);
    };

    return () => {
      ws.close();
    };
  }, []);

  const sendMessage = () => {
    if (socket && input) {
      const message = { text: input, clientId };
      socket.send(JSON.stringify(message));
      setInput("");
    }
  };

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      sendMessage();
    }
  };

  useEffect(() => {
    const focusInput = () => {
      inputRef.current?.focus();
    };
    window.addEventListener("focus", focusInput);
    return () => window.removeEventListener("focus", focusInput);
  }, []);

  const chatBoxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (chatBoxRef.current) {
      chatBoxRef.current.scrollTop = chatBoxRef.current.scrollHeight;
    }
  }, [messages]);

  return (
    <Container>
      <ChatBox ref={chatBoxRef}>
        {messages.map((msg, index) => {
          const isMyMessage = msg.clientId === clientId;
          return (
            <MessageWrapper key={index} isMyMessage={isMyMessage}>
              {isMyMessage ? (
                <>
                  <Timestamp isMyMessage={isMyMessage}>오후 7:19</Timestamp>
                  <MessageBubble isMyMessage={isMyMessage}>{msg.text}</MessageBubble>
                </>
              ) : (
                <>
                  <MessageBubble isMyMessage={isMyMessage}>{msg.text}</MessageBubble>
                  <Timestamp isMyMessage={isMyMessage}>오후 7:19</Timestamp>
                </>
              )}
            </MessageWrapper>
          );
        })}
      </ChatBox>

      <ChatInput
        input={input}
        setInput={setInput}
        inputRef={inputRef}
        handleKeyPress={handleKeyPress}
        sendMessage={sendMessage}
      />
    </Container>
  );
};

export default ChatSection;


// css
const Container = styled.div`
  margin: 0 0;
`;

const ChatBox = styled.div`
  padding: 10px;
  min-height: 554px;
  max-height: 554px;
  display: flex;
  flex-direction: column;

  overflow-y: auto;
`;

const MessageWrapper = styled.div<{ isMyMessage: boolean }>`
  width: 100%;
  display: flex;
  justify-content: ${({ isMyMessage }) =>
    isMyMessage ? "flex-end" : "flex-start"};

  margin: ${({ isMyMessage }) =>
    isMyMessage ? "4px 0px" : "4px 0px"};
`;

const MessageBubble = styled.div<{ isMyMessage: boolean }>`
  background-color: ${({ isMyMessage }) =>
    isMyMessage ? "var(--semantic-brand)" : "var(--background-fill-strong)"};
  color: ${({ isMyMessage }) =>
    isMyMessage ? "var(--content-elevated)" : "var(--content-base)"};

  padding: 8px 16px;
  border-radius: 16px;
  max-width: 268px;

  word-break: break-word;
  white-space: pre-wrap;

  display: inline-block;
  text-align: ${({ isMyMessage }) => (isMyMessage ? "left" : "left")};
`;

const Timestamp = styled.span<{ isMyMessage: boolean }>`
  display: block;
  font-weight: ${theme.font.Weak};
  font-size: ${theme.fontSize.footnote};
  line-height: ${theme.lineHeight.footnote};
  letter-spacing: ${theme.letterSpacing.footnote};
  color: var(--content-assistive);
  align-self: flex-end;
  margin: 0px 10px;
`;
