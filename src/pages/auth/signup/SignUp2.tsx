import React from "react";
import InputField from "@/components/commons/InputField";
import { Slider, Typography, Box } from "@mui/material";
import type { User } from "@/types/user";

interface SignUpProps {
  isGuardian: boolean;
  handleNextStep: () => void;
  userInfo: User;
  setUserInfo: React.Dispatch<React.SetStateAction<User>>;
}

// 장애 부위 옵션을 id와 label 쌍으로 정의
const PART_OPTIONS = [
  { id: 1, label: "상지" },
  { id: 2, label: "하지" },
  { id: 3, label: "척추" },
  { id: 4, label: "몸통" },
  { id: 5, label: "전신" },
];

const marks = [
  { value: 1, label: "1" },
  { value: 2, label: "2" },
  { value: 3, label: "3" },
  { value: 4, label: "4" },
  { value: 5, label: "5" },
];

const SignUp2: React.FC<SignUpProps> = ({
  isGuardian,
  handleNextStep,
  userInfo,
  setUserInfo,
}) => {
  const selectedPartId = userInfo.disabilityPart;
  const severity = userInfo.disabilitySeverity ?? 3;

  const handleSeverityChange = (_: Event, value: number | number[]) => {
    setUserInfo((prev) => ({
      ...prev,
      disabilitySeverity: value as number,
    }));
  };

  const isBasicValid = !!userInfo.name && !!userInfo.birth && !!userInfo.phone;
  const isGuardianValid =
    !!userInfo.specialCondition &&
    !!selectedPartId &&
    userInfo.disabilitySeverity !== undefined;
  const isFormValid = isGuardian
    ? isBasicValid
    : isBasicValid && isGuardianValid;

  return (
    <section className="flex flex-col justify-center gap-[20px] h-full">
      <div className="flex flex-col justify-center gap-[20px]">
        <div>
          <p className="text-headline font-[700] text-[var(--color-base)]">
            필수 정보를 입력해주세요
          </p>
          <p className="text-p-large font-[500] text-[var(--color-additive)]">
            서비스를 이용하기 위해 꼭 필요한 정보에요
          </p>
        </div>

        <InputField
          label="이름"
          placeholder="이름을 입력해주세요"
          value={userInfo.name}
          onChange={(e) => setUserInfo((prev) => ({ ...prev, name: e }))}
        />
        <InputField
          label="생년월일"
          placeholder="0000년 형식으로 입력해주세요"
          value={userInfo.birth}
          onChange={(e) => setUserInfo((prev) => ({ ...prev, birth: e }))}
        />
        <InputField
          label="전화번호"
          placeholder="01000000000 형식으로 입력해주세요"
          value={userInfo.phone}
          onChange={(e) => setUserInfo((prev) => ({ ...prev, phone: e }))}
        />

        {!isGuardian && (
          <>
            <InputField
              label="특이사항"
              placeholder="꼭 필요한 특이사항을 입력해주세요"
              value={userInfo.specialCondition}
              onChange={(e) =>
                setUserInfo((prev) => ({ ...prev, specialCondition: e }))
              }
            />

            <p className="text-body font-[500] text-[var(--color-base)]">
              장애 부위
            </p>
            <div className="flex gap-[8px]">
              {PART_OPTIONS.map((opt) => (
                <button
                  key={opt.id}
                  onClick={() =>
                    setUserInfo((prev) => ({
                      ...prev,
                      disabilityPartId: opt.id,
                      disabilityPartLabel: opt.label,
                    }))
                  }
                  className={`px-[10px] py-[6px] rounded-[8px] ${
                    selectedPartId === String(opt.id)
                      ? "bg-[var(--color-fill-inverted)] text-[var(--color-inverted)]"
                      : "bg-[var(--color-fill-regular)] text-[var(--color-disabled)]"
                  } text-body font-[500]`}
                >
                  {opt.label}
                </button>
              ))}
            </div>

            <Box>
              <Typography
                gutterBottom
                className="text-body font-[500] text-[var(--color-base)]"
              >
                <p>장애 정도</p>
              </Typography>
              <Typography
                variant="caption"
                className="block mb-2 text-footnote text-[var(--color-assistive)]"
              >
                <p>숫자가 높을수록 장애 정도가 심한 경우에 해당해요</p>
              </Typography>
              <Slider
                value={severity}
                onChange={handleSeverityChange}
                step={1}
                marks={marks}
                min={1}
                max={5}
                valueLabelDisplay="auto"
                sx={{
                  height: 8,
                  "& .MuiSlider-thumb": {
                    width: 24,
                    height: 24,
                    bgcolor: "#fff",
                    border: "2px solid currentColor",
                  },
                  "& .MuiSlider-markLabel": {
                    fontSize: "0.875rem",
                  },
                }}
              />
            </Box>
          </>
        )}
      </div>

      <button
        className="w-full h-[56px] mt-[16px] rounded-[8px] bg-[#4288EB] text-[var(--color-elevated)] text-body font-[500] cursor-pointer disabled:opacity-[0.32] disabled:cursor-default"
        disabled={!isFormValid}
        onClick={handleNextStep}
      >
        다음으로
      </button>

      <p className="mt-[12px] text-footnote font-[400] text-[var(--color-assistive)] text-center">
        {!isFormValid
          ? "모든 정보를 입력해야 다음으로 넘어갈 수 있어요"
          : "\u00A0"}
      </p>
    </section>
  );
};

export default SignUp2;
