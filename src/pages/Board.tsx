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
import { axiosClient } from "@/apis/axiosClient";

type Category =
  | "전체"
  | "외출 및 이동"
  | "일상 생활"
  | "주거 환경"
  | "취미 및 사회활동"
  | "소통 및 케어";

// API 에서 내려주는 데이터 타입
interface Post {
  title: string;
  place: string;
  createdAt: string;
  matchingCategory: {
    categoryId: number;
    name: Category;
  };
}

const Board = () => {
  const [category, setCategory] = useState<Category>("전체");
  const [posts, setPosts] = useState<Post[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const sentinelRef = useRef<HTMLDivElement>(null);
  const [isSticky, setIsSticky] = useState(false);

  // 1) 카테고리 이름 → ID 매핑
  const categoryMap: Record<Category, number> = {
    전체: 0,
    "외출 및 이동": 1,
    "일상 생활": 2,
    "주거 환경": 3,
    "취미 및 사회활동": 4,
    "소통 및 케어": 5,
  };

  // 2) 카테고리 변경 시 API 호출
  useEffect(() => {
    const fetchPosts = async () => {
      setIsLoading(true);
      setError(null);
      try {
        const id = categoryMap[category];
        // '전체'면 쿼리 없이 전체 조회 가정
        const res = await axiosClient.get("/matching", {
          params: {
            category: id,
          },
        });
        const json = await res.data;
        setPosts(json.success);
      } catch (err) {
        // setError(err);
        console.error(err);
      } finally {
        setIsLoading(false);
      }
    };
    fetchPosts();
  }, [category]);

  // 3) sticky 색상 변경 옵저버
  useEffect(() => {
    if (!sentinelRef.current) return;
    const observer = new IntersectionObserver(
      ([e]) => setIsSticky(e.intersectionRatio < 1),
      { threshold: [1] }
    );
    observer.observe(sentinelRef.current);
    return () => observer.disconnect();
  }, []);

  // 4) API 데이터 렌더링용 아이콘 맵
  const iconMap: Record<number, JSX.Element> = {
    1: <ShoeIcon />,
    2: <HumanIcon />,
    3: <SofaIcon />,
    4: <DumbbellIcon />,
    5: <HandIcon />,
  };

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
            <img className="size-[24px]" src={openArrow} alt="열기" />
          </button>
        </div>
        <div className="flex items-center gap-[16px]">
          <button>
            <img src={bell} alt="알림" />
          </button>
          <button>
            <img src={search} alt="검색" />
          </button>
        </div>
      </section>

      <section className="flex flex-wrap gap-[8px] px-[16px] py-[10px]">
        {(Object.keys(categoryMap) as Category[]).map((c) => (
          <CategoryBtn
            key={c}
            active={category === c}
            onClick={() => setCategory(c)}
          >
            {/* 아이콘 토글 (선택된 경우 White 아이콘) */}
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

      {/* 5) API 데이터로 렌더링 */}
      <section className="flex flex-col gap-[20px] p-[16px]">
        {isLoading && <p>로딩 중...</p>}
        {error && <p className="text-red-500">에러: {error}</p>}
        {!isLoading &&
          !error &&
          posts.map((post) => (
            <BoardContent
              key={`${post.title}-${post.createdAt}`}
              icon={iconMap[post.matchingCategory.categoryId]}
              title={post.title}
              place={post.place}
              category={post.matchingCategory.name}
            />
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
