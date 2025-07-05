import { useContext, type Dispatch, type SetStateAction } from "react";
import { useNavigate } from "react-router-dom";
import BottomBarContext from "../contexts/BottomBarContext";

import home from "../assets/bottom_bar/home/home.svg";
import homeFilled from "../assets/bottom_bar/home/home_filled.svg";
import document from "../assets/bottom_bar/document/document.svg";
import documentFilled from "../assets/bottom_bar/document/document_filled.svg";
import map from "../assets/bottom_bar/map/map.svg";
import mapFilled from "../assets/bottom_bar/map/map_filled.svg";
import chat from "../assets/bottom_bar/chat/chat.svg";
import chatFilled from "../assets/bottom_bar/chat/chat_filled.svg";
import person from "../assets/bottom_bar/person/person.svg";
import personFilled from "../assets/bottom_bar/person/person_filled.svg";

const BottomBar = () => {
  const { pageMenu, setPageMenu } = useContext(BottomBarContext)!;

  return (
    <section
      className="flex justify-between fixed px-[8px] pt-[8px] w-[393px] h-[52px] rounded-t-[16px] z-10"
      style={{ bottom: "0px", backgroundColor: "white" }}
    >
      <BottomBarBtn
        pageNum={0}
        pageMenu={pageMenu}
        setPageMenu={setPageMenu}
        defaultSrc={home}
        filledSrc={homeFilled}
        to="/"
      >
        홈
      </BottomBarBtn>

      <BottomBarBtn
        pageNum={1}
        pageMenu={pageMenu}
        setPageMenu={setPageMenu}
        defaultSrc={document}
        filledSrc={documentFilled}
        to="/board"
      >
        게시판
      </BottomBarBtn>
      <BottomBarBtn
        pageNum={2}
        pageMenu={pageMenu}
        setPageMenu={setPageMenu}
        defaultSrc={map}
        filledSrc={mapFilled}
        to="/map"
      >
        지도
      </BottomBarBtn>
      <BottomBarBtn
        pageNum={3}
        pageMenu={pageMenu}
        setPageMenu={setPageMenu}
        defaultSrc={chat}
        filledSrc={chatFilled}
        to="/chat"
      >
        채팅
      </BottomBarBtn>
      <BottomBarBtn
        pageNum={4}
        pageMenu={pageMenu}
        setPageMenu={setPageMenu}
        defaultSrc={person}
        filledSrc={personFilled}
        to="/my-activity"
      >
        내 정보
      </BottomBarBtn>
    </section>
  );
};

export default BottomBar;

interface BottomBarBtnProps {
  children: React.ReactNode;
  pageNum: number;
  pageMenu: number;
  setPageMenu: Dispatch<SetStateAction<number>>;
  defaultSrc: string;
  filledSrc: string;
  to: string;
}

const BottomBarBtn = ({
  children,
  pageNum,
  pageMenu,
  setPageMenu,
  defaultSrc,
  filledSrc,
  to,
}: BottomBarBtnProps) => {

  const navigate = useNavigate();

  const handleClick = () => {
    setPageMenu(pageNum);
    navigate(to); // 경로 이동
  };
  
  return (
    <button
      className="flex flex-col items-center w-[75.4px] cursor-pointer"
      onClick={handleClick}
    >
      <img src={pageMenu === pageNum ? filledSrc : defaultSrc} alt="" />
      <p className="text-footnote font-[400]">{children}</p>
    </button>
  );
};
