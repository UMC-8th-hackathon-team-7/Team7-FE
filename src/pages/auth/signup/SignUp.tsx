import container from "../../../assets/auth/Container.svg";
import container2 from "../../../assets/auth/Container (2).svg";

interface SignUpProps {
  setIsGuardian: React.Dispatch<React.SetStateAction<boolean>>;
  handleNextStep: () => void;
}

const SignUp = ({ setIsGuardian, handleNextStep }: SignUpProps) => {
  return (
    <section className="flex flex-col justify-center gap-[20px] h-full">
      <div className="flex flex-col justify-center gap-[20px]">
        <div>
          <p className="text-headline font-[700] text-[var(--color-base)]">
            어떤 역할로 Paer를 이용하시겠어요?
          </p>
          <p className="text-p-large font-[500] text-[var(--color-additive)]">
            한번 고르면 변경할 수 없으니 신중히 결정해주세요
          </p>
        </div>

        {/* 보호자 */}
        <button
          className="cursor-pointer"
          onClick={() => {
            setIsGuardian(true);
            handleNextStep();
          }}
        >
          <img className="w-[361px] h-[80px]" src={container} alt="" />
        </button>
        {/* 장애인 */}
        <button
          className="cursor-pointer"
          onClick={() => {
            setIsGuardian(false);
            handleNextStep();
          }}
        >
          <img className="w-[361px] h-[80px]" src={container2} alt="" />
        </button>
      </div>
    </section>
  );
};

export default SignUp;
