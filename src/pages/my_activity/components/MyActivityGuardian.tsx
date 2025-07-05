import GrayBtn from "@/components/my_activity/GrayBtn";
import RoundBox from "@/components/my_activity/RoundBox";
import edit from "../../../assets/my_activity/ic_edit.svg";
import hand from "../../../assets/my_activity/guardian/ic_hand.svg";
import history from "../../../assets/my_activity/ic_history.svg";
import rightArrow from "../../../assets/board/ic_right_arrow.svg";
import wallet from "../../../assets/my_activity/guardian/ic_wallet.svg";
import timer from "../../../assets/my_activity/guardian/ic_timer.svg";
import newIcon from "../../../assets/my_activity/guardian/ic_new.svg";
import { useState, Fragment, useEffect } from "react";
import { axiosClient } from "@/apis/axiosClient";
import Cookies from "js-cookie";
import { parseDateToAge } from "@/utils/parseDateToAge";

// --- 1) API 응답 타입 정의
interface ProfileResponse {
  resultType: "SUCCESS" | "FAIL";
  error: { errorCode: string; reason: string; data: null } | null;
  success: {
    userId: number;
    profileImage: string;
    phoneNumber: string;
    isDisabled: boolean;
    name: string;
    birthdate: string;
    residenceArea: string;
    createdAt: string;
    updatedAt: string;
  } | null;
}

interface RelatedDisabledItem {
  userId: number;
  name: string;
  age: number;
  residenceArea: string;
  disabledTypeId: number;
  disabilityLevel: number;
  description: string;
}

interface RelatedDisabledResponse {
  resultType: "SUCCESS" | "FAIL";
  error: { errorCode: string; reason: string; data: null } | null;
  success: { relatedDisabledList: RelatedDisabledItem[] } | null;
}

// (선택) 장애 유형 ID → 문자열 매핑
const disabledTypeMap: Record<number, string> = {
  1: "상지",
  2: "하지",
  3: "척추",
  4: "몸통",
  5: "전신",
};

const MyActivityGuardian = () => {
  // --- 2) useState 제네릭에 응답 타입 지정
  const [data, setData] = useState<ProfileResponse | null>(null);
  const [data2, setData2] = useState<RelatedDisabledResponse | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // --- 3) 프로필 조회
        const { data: profileRes } = await axiosClient.get<ProfileResponse>(
          "/profile/me",
          {
            headers: {
              Authorization: `Bearer ${Cookies.get("accessToken")}`,
            },
          }
        );
        setData(profileRes);

        // --- 4) 연결된 장애인 목록 조회 (엔드포인트만 실제 값으로 교체)
        const { data: relatedRes } =
          await axiosClient.get<RelatedDisabledResponse>(
            "/matching/connected-disabled-user",
            {
              headers: {
                Authorization: `Bearer ${Cookies.get("accessToken")}`,
              },
            }
          );
        setData2(relatedRes);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      {/* 내 프로필 */}
      <RoundBox className="flex flex-col gap-[12px] px-[16px] py-[12px] my-[8px]">
        <section className="flex justify-between items-center">
          <div className="flex items-center gap-[12px]">
            <div className="size-[48px] rounded-full bg-[#ddd]"></div>
            <div className="flex flex-col gap-[2px]">
              <p className="text-[var(--color-assistive)] text-footnote font-[400]">
                {data &&
                  `${parseDateToAge(data.success!.birthdate)}세 | ${
                    data.success!.residenceArea
                  }`}
              </p>
              <p className="text-[var(--color-subhead)] text-body font-[500]">
                {data?.success?.name}
              </p>
              <p className="text-[var(--color-additive)] text-footnote font-[400]">
                {data?.success?.phoneNumber}
              </p>
            </div>
          </div>
          <GrayBtn className="cursor-pointer">
            <img src={edit} alt="편집" />
            편집
          </GrayBtn>
        </section>
      </RoundBox>

      {/* 도움 받는 사람 */}
      {data2?.success && (
        <RoundBox className="flex flex-col gap-[12px] px-[20px] py-[10px] my-[8px]">
          <p className="text-[var(--color-assistive)] text-footnote font-[400]">
            도움 받는 사람
          </p>

          {data2.success.relatedDisabledList.map((g, idx) => (
            <Fragment key={g.userId}>
              <section className="flex justify-between items-center">
                <div className="flex items-center gap-[12px]">
                  <div className="size-[48px] rounded-full bg-[#ddd]"></div>
                  <div className="flex flex-col gap-[2px]">
                    <p className="text-[var(--color-assistive)] text-footnote font-[400]">
                      {`${g.age}세 | ${g.residenceArea}`}
                    </p>
                    <p className="text-[var(--color-subhead)] text-body font-[500]">
                      {g.name}
                    </p>
                    <p className="text-[var(--color-additive)] text-footnote font-[400]">
                      {/* 전화번호 API에 포함되어 있으면 */}—
                    </p>
                  </div>
                </div>
                <GrayBtn className="cursor-pointer">
                  <img src={edit} alt="편집" />
                  편집
                </GrayBtn>
              </section>

              <section className="flex flex-col gap-[10px]">
                <div className="flex">
                  <p className="w-[64px] text-[var(--color-assistive)] text-callout font-[400]">
                    특이사항
                  </p>
                  <p className="text-[var(--color-additive)] text-callout font-[500]">
                    {g.description}
                  </p>
                </div>
                <div className="flex">
                  <p className="w-[64px] text-[var(--color-assistive)] text-callout font-[400]">
                    장애 부위
                  </p>
                  <p className="text-[var(--color-additive)] text-callout font-[500]">
                    {disabledTypeMap[g.disabledTypeId] ?? g.disabledTypeId}
                  </p>
                </div>
                <div className="flex">
                  <p className="w-[64px] text-[var(--color-assistive)] text-callout font-[400]">
                    장애 정도
                  </p>
                  <p className="text-[var(--color-additive)] text-callout font-[500]">
                    {g.disabilityLevel}단계
                  </p>
                </div>
              </section>

              {/* 구분선 */}
              {idx < data2.success!.relatedDisabledList.length - 1 && (
                <hr
                  className="my-[8px] border-t"
                  style={{ borderColor: "rgba(146, 157, 173, 0.2)" }}
                />
              )}
            </Fragment>
          ))}
        </RoundBox>
      )}

      <RoundBox className="flex flex-col gap-[12px] px-[20px] py-[10px] my-[8px]">
        <p className="text-[var(--color-assistive)] text-footnote font-[400]">
          활동 내역
        </p>

        <button className="flex justify-between items-center w-full cursor-pointer">
          <div className="flex items-center gap-[12px] text-body font-[500]">
            <img src={hand} alt="" />내 도움 내역
          </div>
          <img src={rightArrow} alt="" />
        </button>

        <button className="flex justify-between items-center w-full cursor-pointer">
          <div className="flex items-center gap-[12px] text-body font-[500]">
            <img src={history} alt="" />내 요청 내역
          </div>
          <img src={rightArrow} alt="" />
        </button>
      </RoundBox>

      <RoundBox className="flex flex-col gap-[12px] px-[20px] py-[10px] my-[8px]">
        <p className="text-[var(--color-assistive)] text-footnote font-[400]">
          마일리지
        </p>

        <div className="flex justify-between items-center">
          <div className="flex items-center gap-[12px]">
            <img src={wallet} alt="" />
            <p className="text-[var(--color-base)] text-body font-[500]">
              내 마일리지
            </p>
          </div>
          <p className="text-[var(--color-additive)] text-callout font-[500]">
            7,159 마일리지
          </p>
        </div>

        <div className="flex justify-between items-center">
          <div className="flex items-center gap-[12px]">
            <img src={timer} alt="" />
            <p className="text-[var(--color-base)] text-body font-[500]">
              내 도움 시간
            </p>
          </div>
          <p className="text-[var(--color-additive)] text-callout font-[500]">
            72시간
          </p>
        </div>

        <button className="flex justify-center items-center gap-[6px] mt-[22px] p-[12px] w-full rounded-[8px] bg-[var(--color-fill-regular)] cursor-pointer">
          <img src={newIcon} alt="" />
          마일리지 사용
        </button>

        <p className="text-[var(--color-assistive)] text-footnote font-[400] text-center">
          마일리지로 쿠폰, 상품권 등을 구매할 수 있어요
        </p>
      </RoundBox>
    </>
  );
};

export default MyActivityGuardian;
