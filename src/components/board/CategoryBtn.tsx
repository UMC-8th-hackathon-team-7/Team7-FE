import clsx from "clsx";
import type { ButtonHTMLAttributes } from "react";

interface CategoryBtnProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  active?: boolean;
}

const CategoryBtn = ({
  className,
  active = false,
  ...props
}: CategoryBtnProps) => {
  return (
    <button
      className={clsx(
        "flex items-center gap-[6px] px-[10px] py-[6px] rounded-[8px] backdrop:blur-[8px] whitespace-nowrap cursor-pointer",
        active
          ? "bg-[var(--color-fill-inverted)] text-[var(--color-inverted)]"
          : "bg-[var(--color-fill-regular)] text-[var(--color-disabled)]",
        className
      )}
      {...props}
    ></button>
  );
};

export default CategoryBtn;
