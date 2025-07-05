import RoundBox from "@/components/my_activity/RoundBox";
import setting from "../assets/my_activity/ic_setting.svg";
import GrayBtn from "@/components/my_activity/GrayBtn";
import edit from "../assets/my_activity/ic_edit.svg";
import history from "../assets/my_activity/ic_history.svg";
import rightArrow from "../assets/board/ic_right_arrow.svg";
import plus from "../assets/my_activity/ic_plus_black.svg";

const MyActivity = () => {
  return (
    <main className="mx-auto px-[16px] w-full min-h-screen bg-[var(--color-root-strong)] relative">
      <section className="flex justify-between items-center px-[4px] py-[13px] h-[60px]">
        <h1 className="text-title font-[700]">내 활동</h1>
        <button className="cursor-pointer">
          <img src={setting} alt="" />
        </button>
      </section>

      <RoundBox className="flex flex-col gap-[12px] px-[16px] py-[12px] my-[8px]">
        <section className="flex justify-between items-center">
          <div className="flex items-center gap-[12px]">
            <div className="size-[48px] rounded-full bg-[#ddd]"></div>
            <div className="flex flex-col gap-[2px]">
              <p className="text-[var(--color-assistive)] text-footnote font-[400]">
                20세 | 서울 마포구
              </p>
              <p className="text-[var(--color-subhead)] text-body font-[500]">
                이수성
              </p>
              <p className="text-[var(--color-additive)] text-footnote font-[400]">
                010-0000-0000
              </p>
            </div>
          </div>
          <GrayBtn className="cursor-pointer">
            <img src={edit} alt="" />
            편집
          </GrayBtn>
        </section>

        <section className="flex flex-col gap-[10px]">
          <div className="flex">
            <p className="w-[64px] text-[var(--color-assistive)] text-callout font-[400]">
              특이사항
            </p>
            <p className="text-[var(--color-additive)] text-callout font-[500]">
              계단이 많으면 어려워해요 ㅠㅠ
            </p>
          </div>
          <div className="flex">
            <p className="w-[64px] text-[var(--color-assistive)] text-callout font-[400]">
              장애 부위
            </p>
            <p className="text-[var(--color-additive)] text-callout font-[500]">
              하지 (다리)
            </p>
          </div>
          <div className="flex">
            <p className="w-[64px] text-[var(--color-assistive)] text-callout font-[400]">
              장애 정도
            </p>
            <p className="text-[var(--color-additive)] text-callout font-[500]">
              5
            </p>
          </div>
        </section>
      </RoundBox>

      <RoundBox className="flex flex-col gap-[12px] px-[20px] py-[10px] my-[8px]">
        <p className="text-[var(--color-assistive)] text-footnote font-[400]">
          활동 내역
        </p>
        <button className="flex justify-between items-center w-full cursor-pointer">
          <div className="flex items-center gap-[12px] text-body font-[500]">
            <img src={history} alt="" />내 요청 내역
          </div>
          <img src={rightArrow} alt="" />
        </button>
      </RoundBox>

      <RoundBox className="px-[20px] py-[10px] my-[8px]">
        <p className="mb-[14px] text-[var(--color-assistive)] text-footnote font-[400]">
          나의 보호자
        </p>

        <p className="mb-[2px] text-body font-[700] text-[var(--color-base)]">
          아직 보호자가 추가되지 않았어요
        </p>
        <p className="text-p-small font-[500] text-[var(--color-additive)]">
          아래 버튼을 눌러 보호자를 추가해주세요
        </p>
        <button className="flex justify-center items-center gap-[6px] mt-[22px] p-[12px] w-full rounded-[8px] bg-[var(--color-fill-regular)] cursor-pointer">
          <img src={plus} alt="" />
          보호자 추가
        </button>
      </RoundBox>
    </main>
  );
};

export default MyActivity;
