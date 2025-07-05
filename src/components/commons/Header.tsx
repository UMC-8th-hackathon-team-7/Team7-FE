export const Header = ({ title }: { title: string }) => (
  <div className="flex items-center justify-center h-[60px] px-6 py-3 gap-4 w-full">
    <h1
      className="text-[18px] font-medium leading-[26px] tracking-[-0.36px] text-content-base text-center w-full"
      style={{ fontFamily: 'var(--Family, "SUIT Variable")' }}
    >
      {title}
    </h1>
  </div>
);