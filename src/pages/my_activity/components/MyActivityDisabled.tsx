import GrayBtn from "@/components/my_activity/GrayBtn";
import RoundBox from "@/components/my_activity/RoundBox";
import { forwardRef, useEffect, useState, useCallback } from "react";
import type { TransitionProps } from "@mui/material/transitions";
import { IconButton, Slide, Dialog } from "@mui/material";
import type { ReactElement } from "react";
import edit from "../../../assets/my_activity/ic_edit.svg";
import history from "../../../assets/my_activity/ic_history.svg";
import rightArrow from "../../../assets/board/ic_right_arrow.svg";
import remove from "../../../assets/my_activity/ic_remove.svg";
import closeIcon from "../../../assets/my_activity/ic_close.svg";
import plus from "../../../assets/my_activity/ic_plus_black.svg";
import { axiosClient } from "@/apis/axiosClient";
import Cookies from "js-cookie";
import { parseDateToAge } from "@/utils/parseDateToAge";

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

interface ProfileDTO {
  userId: number;
  profileImage: string;
  phoneNumber: string;
  isDisabled: boolean;
  name: string;
  birthdate: string;
  residenceArea: string;
  createdAt: string;
  updatedAt: string;
  disability?: {
    type: string;
    level: number;
    description: string;
    disabledTypeId: number;
    assistantId: number;
  };
  totalAssistedTime?: number;
}

interface ProfileResponse {
  resultType: "SUCCESS" | "FAIL";
  error: { errorCode: string; reason: string; data: null } | null;
  success: ProfileDTO | null;
}

const Transition = forwardRef<
  unknown,
  TransitionProps & { children: ReactElement }
>(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const MyActivityDisabled = () => {
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState("");
  const [searchResults, setSearchResults] = useState<Guardian[]>([]);
  const [selectedGuardian, setSelectedGuardian] = useState<string>("");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const [myProfile, setMyProfile] = useState<ProfileDTO | null>(null);
  const [guardianProfile, setGuardianProfile] = useState<ProfileDTO | null>(
    null
  );

  const fetchMyProfile = useCallback(async () => {
    try {
      const { data: res } = await axiosClient.get<ProfileResponse>(
        "/profile/me",
        { headers: { Authorization: `Bearer ${Cookies.get("accessToken")}` } }
      );
      if (res.resultType === "SUCCESS" && res.success) {
        setMyProfile(res.success);
        // if already has assistant, fetch their profile
        if (res.success.disability?.assistantId) {
          const aid = res.success.disability.assistantId;
          const { data: gRes } = await axiosClient.get<ProfileResponse>(
            `/profile/${aid}`
          );
          if (gRes.resultType === "SUCCESS" && gRes.success) {
            setGuardianProfile(gRes.success);
          }
        }
      }
    } catch (e) {
      console.error(e);
    }
  }, []);

  useEffect(() => {
    fetchMyProfile();
  }, [fetchMyProfile]);

  // 검색 로직 unchanged
  useEffect(() => {
    let cancel = false;
    const fetchGuardian = async () => {
      try {
        const idRes = await axiosClient.get<IdByPhoneResponse>(
          "/auth/id-by-phone",
          { params: { phoneNumber: search } }
        );
        if (cancel) return;
        if (idRes.data.resultType === "SUCCESS" && idRes.data.success) {
          const uid = idRes.data.success.userId;
          const { data: pres } = await axiosClient.get<ProfileResponse>(
            `/profile/${uid}`
          );
          if (cancel) return;
          if (pres.resultType === "SUCCESS" && pres.success) {
            const p = pres.success;
            setSearchResults([
              {
                id: p.userId.toString(),
                name: p.name,
                phoneNumber: p.phoneNumber,
                age: Number(parseDateToAge(p.birthdate)),
                region: p.residenceArea,
              },
            ]);
            setErrorMessage(null);
          } else {
            setSearchResults([]);
            setErrorMessage(pres.error?.reason || "프로필 조회 실패");
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
    if (search.trim()) fetchGuardian();
    else {
      setSearchResults([]);
      setErrorMessage(null);
      setSelectedGuardian("");
    }
    return () => {
      cancel = true;
    };
  }, [search]);

  const handleAddGuardian = async () => {
    if (!selectedGuardian) return;
    try {
      await axiosClient.patch(
        "/profile",
        { disabledInfo: { assistantId: Number(selectedGuardian) } },
        { headers: { Authorization: `Bearer ${Cookies.get("accessToken")}` } }
      );
      setOpen(false);
      setSelectedGuardian("");
      fetchMyProfile();
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <>
      {/* 내 프로필 */}
      {myProfile && (
        <RoundBox className="flex flex-col gap-[12px] px-[16px] py-[12px] my-[8px]">
          <section className="flex justify-between items-center">
            <div className="flex items-center gap-[12px]">
              <div className="size-[48px] rounded-full bg-[#ddd]" />
              <div className="flex flex-col gap-[2px]">
                <p className="text-[var(--color-assistive)] text-footnote font-[400]">
                  {parseDateToAge(myProfile.birthdate)}세 |{" "}
                  {myProfile.residenceArea}
                </p>
                <p className="text-[var(--color-subhead)] text-body font-[500]">
                  {myProfile.name}
                </p>
                <p className="text-[var(--color-additive)] text-footnote font-[400]">
                  {myProfile.phoneNumber}
                </p>
              </div>
            </div>
            <GrayBtn>
              <img src={edit} alt="" /> 편집
            </GrayBtn>
          </section>
          <section className="flex flex-col gap-[10px]">
            <div className="flex">
              <p className="w-[64px] text-[var(--color-assistive)] text-callout font-[400]">
                특이사항
              </p>
              <p className="text-[var(--color-additive)] text-callout font-[500]">
                {myProfile.disability?.description || "-"}
              </p>
            </div>
            <div className="flex">
              <p className="w-[64px] text-[var(--color-assistive)] text-callout font-[400]">
                장애 부위
              </p>
              <p className="text-[var(--color-additive)] text-callout font-[500]">
                {myProfile.disability?.type || "-"}
              </p>
            </div>
            <div className="flex">
              <p className="w-[64px] text-[var(--color-assistive)] text-callout font-[400]">
                장애 정도
              </p>
              <p className="text-[var(--color-additive)] text-callout font-[500]">
                {myProfile.disability?.level ?? "-"}
              </p>
            </div>
          </section>
        </RoundBox>
      )}

      {/* 활동 내역 */}
      <RoundBox className="flex flex-col gap-[12px] px-[20px] py-[10px] my-[8px]">
        <p className="text-[var(--color-assistive)] text-footnote font-[400]">
          활동 내역
        </p>
        <button className="flex justify-between items-center w-full">
          <div className="flex items-center gap-[12px] text-body font-[500]">
            <img src={history} alt="" />내 요청 내역
          </div>
          <img src={rightArrow} alt="" />
        </button>
      </RoundBox>

      {/* 보호자 정보 or 추가 */}
      {guardianProfile ? (
        <RoundBox className="flex flex-col gap-[12px] px-[16px] py-[12px] my-[8px]">
          <section className="flex justify-between items-center">
            <div className="flex items-center gap-[12px]">
              <div className="size-[48px] rounded-full bg-[#ddd]" />
              <div className="flex flex-col gap-[2px]">
                <p className="text-[var(--color-assistive)] text-footnote font-[400]">
                  {parseDateToAge(guardianProfile.birthdate)}세 |{" "}
                  {guardianProfile.residenceArea}
                </p>
                <p className="text-[var(--color-subhead)] text-body font-[500]">
                  {guardianProfile.name}
                </p>
                <p className="text-[var(--color-additive)] text-footnote font-[400]">
                  {guardianProfile.phoneNumber}
                </p>
              </div>
            </div>
            <GrayBtn onClick={() => setGuardianProfile(null)}>
              <img src={remove} alt="" /> 삭제
            </GrayBtn>
          </section>
        </RoundBox>
      ) : (
        <RoundBox className="px-[20px] py-[10px] my-[8px]">
          <p className="mb-[14px] text-footnote font-[400] text-[var(--color-assistive)]">
            나의 보호자
          </p>
          <p className="mb-[2px] text-body font-[700] text-[var(--color-base)]">
            아직 보호자가 없습니다
          </p>
          <button
            onClick={() => setOpen(true)}
            className="flex justify-center items-center gap-[6px] mt-[22px] p-[12px] w-full rounded-[8px] bg-[var(--color-fill-regular)]"
          >
            <img src={plus} alt="" /> 보호자 추가
          </button>
        </RoundBox>
      )}

      {/* 다이얼로그 */}
      <Dialog
        open={open}
        onClose={() => setOpen(false)}
        TransitionComponent={Transition}
        keepMounted
        fullWidth
        PaperProps={{
          sx: {
            m: 0,
            bottom: 0,
            position: "absolute",
            borderRadius: "16px 16px 0 0",
            width: "393px",
          },
        }}
        BackdropProps={{ sx: { backgroundColor: "rgba(0,0,0,0.5)" } }}
      >
        <div className="px-[20px] pt-[16px] pb-[24px]">
          <div className="flex justify-between items-center mb-[16px]">
            <h2 className="text-title font-[700] text-[var(--color-base)]">
              보호자 추가
            </h2>
            <IconButton onClick={() => setOpen(false)}>
              <img src={closeIcon} alt="닫기" />
            </IconButton>
          </div>
          <div className="relative">
            <input
              type="text"
              className="w-full h-[44px] pl-[12px] pr-[40px] py-[10px] rounded-[12px] bg-[var(--color-fill-regular)] text-body font-[400] placeholder-[var(--color-assistive)] focus:outline-none focus:border-[var(--color-subhead)]"
              placeholder="전화번호 검색"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            {search && (
              <button
                className="absolute right-[12px] translate-y-[100%]"
                onClick={() => setSearch("")}
              >
                <img src={closeIcon} alt="" className="w-4 h-4" />
              </button>
            )}
          </div>
          {search && (
            <>
              <hr className="my-[16px] border-[#929DAD] opacity-[0.2]" />
              {errorMessage ? (
                <p className="text-footnote text-[var(--color-additive)]">
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
                        <p className="text-footnote text-[var(--color-assistive)]">
                          {g.age}세 | {g.region}
                        </p>
                        <p className="text-body text-[var(--color-base)] font-[500]">
                          {g.name}
                        </p>
                      </div>
                    </div>
                    <input
                      type="radio"
                      name="guardian"
                      value={g.id}
                      checked={selectedGuardian === g.id}
                      onChange={() => setSelectedGuardian(g.id)}
                      className="size-[24px]"
                    />
                  </section>
                ))
              )}
            </>
          )}
          <button
            onClick={handleAddGuardian}
            disabled={!selectedGuardian}
            className="w-full h-[56px] mt-[16px] rounded-[8px] bg-[#4288EB] text-[var(--color-elevated)] text-body font-[500] disabled:opacity-[0.32] disabled:cursor-default"
          >
            추가하기
          </button>
        </div>
      </Dialog>
    </>
  );
};

export default MyActivityDisabled;
