import { useEffect, useRef, useState, type JSX } from "react";
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
import clsx from "clsx";

type Category =
  | "전체"
  | "외출 및 이동"
  | "일상 생활"
  | "주거 환경"
  | "취미 및 사회활동"
  | "소통 및 케어";

const Board = () => {
  const [category, setCategory] = useState<Category>("전체");

  const sentinelRef = useRef<HTMLDivElement>(null);

  // sticky 시 색상 변경
  const [isSticky, setIsSticky] = useState(false);
  useEffect(() => {
    if (!sentinelRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        // sentinel이 뷰포트에서 사라지면 sticky 발동
        setIsSticky(entry.intersectionRatio < 1);
      },
      { threshold: [1] }
    );

    observer.observe(sentinelRef.current);
    return () => observer.disconnect();
  }, []);

  const items: {
    id: number;
    category: Category;
    icon: JSX.Element;
  }[] = [
    { id: 1, category: "외출 및 이동", icon: <ShoeIcon /> },
    { id: 2, category: "일상 생활", icon: <HumanIcon /> },
    { id: 3, category: "주거 환경", icon: <SofaIcon /> },
    { id: 4, category: "취미 및 사회활동", icon: <DumbbellIcon /> },
    { id: 5, category: "소통 및 케어", icon: <HandIcon /> },
    { id: 6, category: "외출 및 이동", icon: <ShoeIcon /> },
    { id: 7, category: "일상 생활", icon: <HumanIcon /> },
    { id: 8, category: "주거 환경", icon: <SofaIcon /> },
    { id: 9, category: "취미 및 사회활동", icon: <DumbbellIcon /> },
    { id: 10, category: "소통 및 케어", icon: <HandIcon /> },
    { id: 11, category: "외출 및 이동", icon: <ShoeIcon /> },
    { id: 12, category: "일상 생활", icon: <HumanIcon /> },
    { id: 13, category: "주거 환경", icon: <SofaIcon /> },
    { id: 14, category: "취미 및 사회활동", icon: <DumbbellIcon /> },
    { id: 15, category: "소통 및 케어", icon: <HandIcon /> },
  ];

  const filtered = items.filter(
    (item) => category === "전체" || item.category === category
  );

  return (
    <main
      className="flex-1 overflow-y-auto mx-auto w-full bg-[var(--color-root-strong)] relative"
      style={{ scrollbarGutter: "stable" }}
    >
      <div ref={sentinelRef} className="h-0" />

      <section
        className={clsx(
          "flex justify-between sticky top-[0px] px-[16px] py-[12px] w-full z-10 transition-colors duration-200",
          isSticky ? "bg-[#fff]" : "bg-[var(--color-root-strong)]"
        )}
      >
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
        {(
          [
            "전체",
            "외출 및 이동",
            "일상 생활",
            "주거 환경",
            "취미 및 사회활동",
            "소통 및 케어",
          ] as Category[]
        ).map((c) => (
          <CategoryBtn
            key={c}
            active={category === c}
            onClick={() => setCategory(c)}
          >
            {c === "외출 및 이동" ? (
              category === c ? (
                <ShoeIconWhite />
              ) : (
                <ShoeIcon />
              )
            ) : c === "일상 생활" ? (
              category === c ? (
                <HumanIconWhite />
              ) : (
                <HumanIcon />
              )
            ) : c === "주거 환경" ? (
              category === c ? (
                <SofaIconWhite />
              ) : (
                <SofaIcon />
              )
            ) : c === "취미 및 사회활동" ? (
              category === c ? (
                <DumbbellIconWhite />
              ) : (
                <DumbbellIcon />
              )
            ) : c === "소통 및 케어" ? (
              category === c ? (
                <HandIconWhite />
              ) : (
                <HandIcon />
              )
            ) : null}
            {c}
          </CategoryBtn>
        ))}
      </section>

      {/* render only filtered items */}
      <section className="flex flex-col gap-[20px] p-[16px]">
        {filtered.map(({ id, icon }) => (
          <BoardContent key={id} icon={icon} />
        ))}
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
