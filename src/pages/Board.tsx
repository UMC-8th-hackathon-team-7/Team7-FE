import { useState } from "react";
import CategoryBtn from "@/components/board/CategoryBtn";

import BoardContent from "@/components/board/BoardContent";
import ShoeIcon from "@/components/board/icons/ShoeIcon";
import HumanIcon from "@/components/board/icons/HumanIcon";
import SofaIcon from "@/components/board/icons/SofaIcon";
import DumbbellIcon from "@/components/board/icons/DumbbellIcon";
import HandIcon from "@/components/board/icons/HandIcon";
import ShoeIconWhite from "@/components/board/icons/ShoeIconWhite";
import HumanIconWhite from "@/components/board/icons/HumanIconWhite";
import SofaIconWhite from "@/components/board/icons/SofaIconWhite";
import DumbbellIconWhite from "@/components/board/icons/DumbbellIconWhite";
import HandIconWhite from "@/components/board/icons/HandIconWhite";

import bell from "./../assets/board/ic_bell.svg";
import openArrow from "./../assets/board/ic_open_arrow.svg";
import search from "./../assets/board/ic_search.svg";
import plus from "./../assets/board/ic_plus.svg";

type Category =
  | "전체"
  | "외출 및 이동"
  | "일상 생활"
  | "주거 환경"
  | "취미 및 사회활동"
  | "소통 및 케어";

const Board = () => {
  const [category, setCategory] = useState<Category>("전체");

  return (
    <main className="flex-1 overflow-y-auto mx-auto w-full bg-[var(--color-root-strong)] relative">
      <section className="flex justify-between sticky top-[0px] px-[16px] py-[12px] w-full bg-[var(--color-root-strong)] z-10">
        <div className="flex items-center gap-[6px]">
          <h3 className="text-title font-[700]">공덕역</h3>
          <button>
            <img className="size-[24px]" src={openArrow} alt="" />
          </button>
        </div>
        <div className="flex items-center gap-[16px]">
          <button className="flex items-center">
            <img src={bell} alt="" />
          </button>
          <button>
            <img src={search} alt="" />
          </button>
        </div>
      </section>

      <section className="flex flex-wrap gap-[8px] px-[16px] py-[10px]">
        <CategoryBtn
          active={category === "전체"}
          onClick={() => setCategory("전체")}
        >
          전체
        </CategoryBtn>
        <CategoryBtn
          active={category === "외출 및 이동"}
          onClick={() => setCategory("외출 및 이동")}
        >
          {category === "외출 및 이동" ? <ShoeIconWhite /> : <ShoeIcon />}
          외출 및 이동
        </CategoryBtn>
        <CategoryBtn
          active={category === "일상 생활"}
          onClick={() => setCategory("일상 생활")}
        >
          {category === "일상 생활" ? <HumanIconWhite /> : <HumanIcon />}
          일상 생활
        </CategoryBtn>
        <CategoryBtn
          active={category === "주거 환경"}
          onClick={() => setCategory("주거 환경")}
        >
          {category === "주거 환경" ? <SofaIconWhite /> : <SofaIcon />}
          주거 환경
        </CategoryBtn>
        <CategoryBtn
          active={category === "취미 및 사회활동"}
          onClick={() => setCategory("취미 및 사회활동")}
        >
          {category === "취미 및 사회활동" ? (
            <DumbbellIconWhite />
          ) : (
            <DumbbellIcon />
          )}
          취미 및 사회활동
        </CategoryBtn>
        <CategoryBtn
          active={category === "소통 및 케어"}
          onClick={() => setCategory("소통 및 케어")}
        >
          {category === "소통 및 케어" ? <HandIconWhite /> : <HandIcon />}
          소통 및 케어
        </CategoryBtn>
      </section>

      <section className="flex flex-col gap-[20px] p-[16px]">
        <BoardContent icon={<ShoeIcon />} />
        <BoardContent icon={<HumanIcon />} />
        <BoardContent icon={<SofaIcon />} />
        <BoardContent icon={<DumbbellIcon />} />
        <BoardContent icon={<HandIcon />} />
        <BoardContent icon={<HandIcon />} />
        <BoardContent icon={<HandIcon />} />
        <BoardContent icon={<HandIcon />} />
        <BoardContent icon={<HandIcon />} />
        <BoardContent icon={<HandIcon />} />
        <BoardContent icon={<HandIcon />} />
        <BoardContent icon={<HandIcon />} />
        <BoardContent icon={<HandIcon />} />
        <BoardContent icon={<HandIcon />} />
        <BoardContent icon={<HandIcon />} />
        <BoardContent icon={<HandIcon />} />
        <BoardContent icon={<HandIcon />} />
      </section>

      <div className="flex justify-end">
        <button className="flex items-center gap-[8px] fixed bottom-[72px] right-[calc(50% + 345.5px)] translate-x-[-16px] p-[16px] rounded-[12px] bg-[#4288EB] text-[var(--color-elevated)] text-body font-[500] cursor-pointer">
          <img src={plus} alt="" />
          도움 요청
        </button>
      </div>
    </main>
  );
};

export default Board;
