import { useState, useEffect } from "react";
import closeIcon from "../../../assets/my_activity/ic_close.svg";
import { axiosClient } from "@/apis/axiosClient";

interface Guardian {
  id: string;
  name: string;
  phoneNumber: string;
  age: number;
  region: string;
}

interface IdByPhoneResponse {
  resultType: "SUCCESS" | "FAIL";
  error: { reason: string } | null;
  success: { userId: number } | null;
}

interface ProfileResponse {
  resultType: "SUCCESS" | "FAIL";
  error: { reason: string } | null;
  success: {
    userId: number;
    profileImage: string;
    phoneNumber: string;
    isDisabled: boolean;
    name: string;
    birthdate: string; // ISO string
    residenceArea: string;
    createdAt: string;
    updatedAt: string;
  } | null;
}

const calculateAge = (birthdate: string): number => {
  const birth = new Date(birthdate);
  const now = new Date();
  let age = now.getFullYear() - birth.getFullYear();
  const m = now.getMonth() - birth.getMonth();
  if (m < 0 || (m === 0 && now.getDate() < birth.getDate())) {
    age--;
  }
  return age;
};

const SignUp4 = ({ handleNextStep }: { handleNextStep: () => void }) => {
  const [search, setSearch] = useState("");
  const [searchResults, setSearchResults] = useState<Guardian[]>([]);
  const [selectedGuardian, setSelectedGuardian] = useState("");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  useEffect(() => {
    let cancel = false;
    const fetchGuardian = async () => {
      try {
        // 1) 전화번호로 ID 조회
        const idRes = await axiosClient.get<IdByPhoneResponse>(
          "/auth/id-by-phone",
          {
            params: { phoneNumber: search },
          }
        );

        if (cancel) return;

        if (idRes.data.resultType === "SUCCESS" && idRes.data.success) {
          const userId = idRes.data.success.userId;

          // 2) 프로필 조회
          const profileRes = await axiosClient.get<ProfileResponse>(
            `/profile/${userId}`
          );

          if (cancel) return;

          if (
            profileRes.data.resultType === "SUCCESS" &&
            profileRes.data.success
          ) {
            const p = profileRes.data.success;
            const guardian: Guardian = {
              id: p.userId.toString(),
              name: p.name,
              phoneNumber: p.phoneNumber,
              age: calculateAge(p.birthdate),
              region: p.residenceArea,
            };
            setSearchResults([guardian]);
            setErrorMessage(null);
          } else {
            setSearchResults([]);
            setErrorMessage(
              profileRes.data.error?.reason || "프로필 조회 실패"
            );
          }
        } else {
          setSearchResults([]);
          setErrorMessage(idRes.data.error?.reason || "ID 조회 실패");
        }
      } catch {
        if (!cancel) {
          setSearchResults([]);
          setErrorMessage("전화번호가 일치하지 않습니다.");
        }
      }
    };

    if (search.trim()) {
      fetchGuardian();
    } else {
      setSearchResults([]);
      setErrorMessage(null);
    }

    return () => {
      cancel = true;
    };
  }, [search]);

  return (
    <section className="flex flex-col justify-between h-[calc(100vh-70px)] px-[20px] py-[12px]">
      <div>
        <p className="text-subhead font-[700] text-[var(--color-base)] ">
          보호자를 추가할까요?
        </p>
        <p className="text-body font-[500] text-[var(--color-additive)]">
          아래에서 보호자를 찾아 추가할 수 있어요
        </p>

        <div className="relative">
          <p className="mb-[8px] text-callout font-[500] text-[var(--color-additive)]">
            보호자 검색
          </p>
          <input
            type="text"
            className="w-full h-[44px] pl-[12px] pr-[40px] py-[10px] bg-[var(--color-fill-regular)] rounded-[12px] text-body font-[400] placeholder-[var(--color-assistive)] focus:outline-none focus:border-[var(--color-subhead)]"
            placeholder="보호자 전화번호로 검색해주세요"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          {search && (
            <button
              className="absolute right-[12px] translate-y-[100%]"
              onClick={() => setSearch("")}
            >
              <img src={closeIcon} alt="지우기" className="w-4 h-4" />
            </button>
          )}
        </div>

        {search && (
          <>
            <hr className="my-[16px] border-1 border-[#929DAD] opacity-[0.2]" />
            <p className="mt-[12px] text-subhead font-[700] text-[var(--color-base)] ">
              검색 결과
            </p>

            {errorMessage ? (
              <p className="mt-[8px] text-footnote text-[var(--color-additive)]">
                {errorMessage}
              </p>
            ) : (
              searchResults.map((g) => (
                <section
                  key={g.id}
                  className="flex justify-between items-center mt-[18px]"
                >
                  <div className="flex items-center gap-[12px]">
                    <div className="size-[48px] rounded-full bg-[#ddd]" />
                    <div className="flex flex-col gap-[2px]">
                      <p className="text-[var(--color-assistive)] text-footnote font-[400]">
                        {g.age}세 | {g.region}
                      </p>
                      <p className="text-[var(--color-base)] text-body font-[500]">
                        {g.name}
                      </p>
                    </div>
                  </div>
                  <input
                    className="size-[24px]"
                    type="radio"
                    name="guardian"
                    value={g.id}
                    checked={selectedGuardian === g.id}
                    onChange={(e) => setSelectedGuardian(e.currentTarget.value)}
                  />
                </section>
              ))
            )}
          </>
        )}
      </div>

      <div>
        <button
          className="w-full h-[56px] mt-[16px] rounded-[8px] text-[#4288EB] text-body font-[500] cursor-pointer"
          style={{ backgroundColor: "rgba(66, 136, 235, 0.08)" }}
          onClick={handleNextStep}
        >
          건너뛰기
        </button>
        <button
          className="w-full h-[56px] mt-[16px] rounded-[8px] bg-[#4288EB] text-[var(--color-elevated)] text-body font-[500] cursor-pointer disabled:opacity-[0.32] disabled:cursor-default"
          disabled={!selectedGuardian}
          onClick={handleNextStep}
        >
          추가하기
        </button>
      </div>
    </section>
  );
};

export default SignUp4;
