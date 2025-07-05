import clsx from "clsx";

const GrayBtn = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLButtonElement>) => {
  return (
    <button
      className={clsx(
        "flex gap-[4px] p-[10px] rounded-[8px] bg-[var(--color-fill-regular)] text-[var(--color-base)] text-footnote font-[500]",
        className
      )}
      {...props}
    />
  );
};

export default GrayBtn;
