import GrayBtn from "@/components/my_activity/GrayBtn";
import RoundBox from "@/components/my_activity/RoundBox";
import edit from "../../../assets/my_activity/ic_edit.svg";
import hand from "../../../assets/my_activity/guardian/ic_hand.svg";
import history from "../../../assets/my_activity/ic_history.svg";
import rightArrow from "../../../assets/board/ic_right_arrow.svg";
import wallet from "../../../assets/my_activity/guardian/ic_wallet.svg";
import timer from "../../../assets/my_activity/guardian/ic_timer.svg";
import newIcon from "../../../assets/my_activity/guardian/ic_new.svg";

const MyActivityGuardian = () => {
  return (
    <>
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
      </RoundBox>

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
