import clsx from "clsx";

const RoundBox = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <div
      className={clsx(
        "w-full rounded-[16px] bg-[var(--color-fill-interactive)]",
        className
      )}
      {...props}
    />
  );
};

export default RoundBox;
