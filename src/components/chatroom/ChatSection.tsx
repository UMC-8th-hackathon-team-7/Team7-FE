import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { v4 as uuidv4 } from "uuid";
import ChatInput from "./ChatInput";
import { theme } from "../../styles/theme";
import Profile from "./Profile";
import ProfileAccepted from "./ProfileAccepted";
import OtherUserProfile from "./OtherUserProfile";

const clientId = uuidv4();

type ChatMessage =
  | { clientId: string; text: string; type?: undefined }
  | { clientId: string; type: "profile" }
  | { clientId: string; type: "profileAccepted" };

const ChatSection = () => {
  const [input, setInput] = useState<string>("");
  const inputRef = useRef<HTMLInputElement>(null);
  const [socket, setSocket] = useState<WebSocket | null>(null);
  const [messages, setMessages] = useState<ChatMessage[]>([]);

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

  const sendProfileMessage = () => {
    if (socket) {
      const message = {
        clientId,
        type: "profile",
        // 필요하다면 추가 데이터도 넣기 가능
        acceptedAt: Date.now(),
        note: "도움 수락 후 다시 보냄",
      };
      socket.send(JSON.stringify(message));
    }
  };  

  const sendProfileAcceptedMessage = () => {
    if (socket) {
      const message = {
        clientId,
        type: "profileAccepted",
        // 추가 데이터가 있으면 넣어도 됨
      };
      socket.send(JSON.stringify(message));
    }
  };

  const handleAccept = () => {
    sendProfileAcceptedMessage();
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

          if (msg.type === "profile") {
            return <Profile key={index} isMyMessage={isMyMessage} onAccept={handleAccept} sendProfileAcceptedMessage={sendProfileAcceptedMessage} />;
          }
        
          if (msg.type === "profileAccepted") {
            return isMyMessage ? (
              <ProfileAccepted key={index} isMyMessage={isMyMessage} />
            ) : (
              <OtherUserProfile key={index} isMyMessage={isMyMessage} />
            );
          }          

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
        sendProfileMessage={sendProfileMessage}
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
