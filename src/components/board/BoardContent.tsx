import rightArrow from "@/assets/board/ic_right_arrow.svg";

const BoardContent = ({
  icon,
  title,
  place,
  category,
}: {
  icon: React.ReactNode;
  title: string;
  place: string;
  category: string;
}) => {
  return (
    <section className="flex items-center gap-[12px] px-[16px] py-[12px] w-full h-[100px] bg-[var(--color-fill-interactive)] rounded-[16px]">
      <div className="flex items-center h-full">{icon}</div>
      <div className="flex flex-col gap-[2px] w-full">
        <p className="text-[var(--color-assistive)] text-footnote font-[400]">
          {category}
        </p>
        <p className="text-[var(--color-base)] text-body font-[500]">{title}</p>
        <p className="text-[var(--color-additive)] text-footnote font-[400]">
          {place}
        </p>
      </div>
      <img src={rightArrow} alt="" />
    </section>
  );
};

export default BoardContent;
