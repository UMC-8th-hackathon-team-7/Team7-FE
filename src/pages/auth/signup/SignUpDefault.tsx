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
import { axiosClient } from "@/apis/axiosClient";
import { useNavigate } from "react-router-dom";

export interface BaseSignUpPayload {
  phoneNumber: string;
  password: string;
  name: string;
  birthdate: string; // "YYYY-MM-DD"
  residenceArea: string;
}

export interface NonDisabledPayload extends BaseSignUpPayload {
  isDisabled: false;
}

export interface DisabledPayload extends BaseSignUpPayload {
  isDisabled: true;
  disabledTypeId: number;
  disabilityLevel: number;
  description: string;
  assistantId?: number;
  profileImage?: string;
}

export type SignUpPayload = NonDisabledPayload | DisabledPayload;
export interface SignUpResponse {
  resultType: "SUCCESS" | "FAIL";
  success?: { message: string };
  error?: {
    errorCode: string;
    reason: string;
    data: {
      errorCode: string;
      reason: string;
      data: null;
    };
  };
}

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

  const navigate = useNavigate();

  const handleNextStep = () => {
    setStep(step + 1);
  };

  const handlePrevStep = () => {
    if (step === 1) return;
    setStep(step - 1);
  };

  const handleSignUp = async () => {
    try {
      // 공통 필드만 모아두고
      const base: BaseSignUpPayload = {
        phoneNumber: userInfo.phone,
        password: "1234",
        name: userInfo.name,
        birthdate: userInfo.birth,
        residenceArea: "서울특별시 마포구",
      };

      let payload: SignUpPayload;

      if (isGuardian) {
        // isDisabled === true branch
        payload = {
          ...base,
          isDisabled: false,
          profileImage: "",
        } as NonDisabledPayload;
      } else {
        // isDisabled === false branch
        payload = {
          ...base,
          isDisabled: true,
          disabledTypeId: Number(userInfo.disabilityPart), // string → number
          disabilityLevel: userInfo.disabilitySeverity,
          description: userInfo.specialCondition,
          profileImage: "",
        } as DisabledPayload;
      }

      const { data } = await axiosClient.post<SignUpResponse>(
        "/auth/register",
        payload
      );

      if (data.resultType === "SUCCESS") {
        alert(data.success!.message);
        // TODO: 리다이렉트 등
      } else {
        alert(data.error!.reason);
      }

      const { data: loginData } = await axiosClient.post("/auth/login", {
        phoneNumber: userInfo.phone,
        password: "1234",
      });

      if (loginData.resultType === "SUCCESS") {
        alert(loginData.success!.message);
        navigate("/board");
      } else {
        alert(loginData.error!.reason);
      }
    } catch (err) {
      console.error(err);
      alert("회원가입 중 오류가 발생했습니다.");
    }
  };

  return (
    <div className="flex-1 overflow-y-auto">
      <main className="mx-auto px-[16px] w-full min-h-screen">
        <section className="flex justify-between items-center px-[4px] py-[13px] h-[60px]">
          <button className="cursor-pointer" onClick={handlePrevStep}>
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
