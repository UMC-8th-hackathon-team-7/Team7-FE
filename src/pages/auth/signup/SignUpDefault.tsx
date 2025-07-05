import arrowBack from "../../../assets/my_activity/ic_arrow_back.svg";
import step1 from "../../../assets/auth/progress_bar/step1.svg";
import step2 from "../../../assets/auth/progress_bar/step2.svg";
import step3 from "../../../assets/auth/progress_bar/step3.svg";
import step4 from "../../../assets/auth/progress_bar/step4.svg";
import { useState } from "react";
import SignUp from "./SignUp";
import SignUp2 from "./SignUp2";
import type { User } from "@/types/user";
import SignUp3 from "./SignUp3";
import SignUp4 from "./SignUp4";

const SignUpDefault = () => {
  const [isGuardian, setIsGuardian] = useState(true);
  const [step, setStep] = useState(1);
  const [userInfo, setUserInfo] = useState<User>({
    name: "",
    birth: "",
    phone: "",
    specialCondition: "",
    disabilityPart: "",
    disabilitySeverity: 3,
  });

  const handleNextStep = () => {
    setStep(step + 1);
  };

  const handlePrevStep = () => {
    setStep(step - 1);
  };

  const handleSignUp = async () => {
    // axios 호출
    console.log(userInfo);
  };

  return (
    <div className="flex-1 overflow-y-auto">
      <main className="mx-auto px-[16px] w-full min-h-screen">
        <section className="flex justify-between items-center px-[4px] py-[13px] h-[60px]">
          <button className="cursor-pointer">
            <img src={arrowBack} alt="" />
          </button>
          <h1 className="text-subhead font-[500]">회원가입</h1>
          <div></div>
        </section>
        {step === 1 && <img src={step1} alt="" />}
        {step === 2 && <img src={step2} alt="" />}
        {step === 3 && <img src={step3} alt="" />}
        {step === 4 && <img src={step4} alt="" />}

        {step === 1 && (
          <SignUp
            setIsGuardian={setIsGuardian}
            handleNextStep={handleNextStep}
          />
        )}
        {step === 2 && (
          <SignUp2
            isGuardian={isGuardian}
            handleNextStep={handleNextStep}
            userInfo={userInfo}
            setUserInfo={setUserInfo}
          />
        )}
        {step === 3 && (
          <SignUp3
            handleNextStep={isGuardian ? handleSignUp : handleNextStep}
          />
        )}
        {step === 4 && <SignUp4 handleNextStep={handleSignUp} />}
      </main>
    </div>
  );
};

export default SignUpDefault;
