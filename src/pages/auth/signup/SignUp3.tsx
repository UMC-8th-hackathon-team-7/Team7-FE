import LocationPage from "@/pages/LocationPage";

const SignUp3 = ({ handleNextStep }: { handleNextStep: () => void }) => {
  return (
    <section className="flex flex-col justify-center gap-[20px] ">
      <LocationPage />
      <button
        className="w-full h-[56px] mt-[16px] rounded-[8px] bg-[#4288EB] text-[var(--color-elevated)] text-body font-[500] cursor-pointer disabled:opacity-[0.32] disabled:cursor-default translate-y-[-400%]"
        onClick={handleNextStep}
      >
        Paer 시작하기
      </button>
    </section>
  );
};

export default SignUp3;
