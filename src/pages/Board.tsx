import CategoryBtn from "@/components/board/CategoryBtn";
import bell from "./../assets/board/ic_bell.svg";
import openArrow from "./../assets/board/ic_open_arrow.svg";
import search from "./../assets/board/ic_search.svg";
import BoardContent from "@/components/board/BoardContent";
import ShoeIcon from "@/components/board/icons/ShoeIcon";
import HumanIcon from "@/components/board/icons/HumanIcon";
import SofaIcon from "@/components/board/icons/SofaIcon";
import DumbbellIcon from "@/components/board/icons/DumbbellIcon";
import HandIcon from "@/components/board/icons/HandIcon";

const Board = () => {
  return (
    <main className="mx-auto w-full min-h-screen bg-[var(--color-root-strong)]">
      <section className="flex justify-between px-[16px] py-[12px] w-full">
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
        <CategoryBtn active={true}>전체</CategoryBtn>
        <CategoryBtn>
          <ShoeIcon />
          외출 및 이동
        </CategoryBtn>
        <CategoryBtn>
          <HumanIcon />
          일상 생활
        </CategoryBtn>
        <CategoryBtn>
          <SofaIcon />
          주거 환경
        </CategoryBtn>
        <CategoryBtn>
          <DumbbellIcon />
          취미 및 사회활동
        </CategoryBtn>
        <CategoryBtn>
          <HandIcon />
          소통 및 케어
        </CategoryBtn>
      </section>

      <section className="flex flex-col gap-[20px] p-[16px]">
        <BoardContent icon={<ShoeIcon />} />
        <BoardContent icon={<HumanIcon />} />
        <BoardContent icon={<SofaIcon />} />
        <BoardContent icon={<DumbbellIcon />} />
        <BoardContent icon={<HandIcon />} />
      </section>
    </main>
  );
};

export default Board;
