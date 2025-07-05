import RoundBox from "@/components/my_activity/RoundBox";
import arrowBack from "../../assets/my_activity/ic_arrow_back.svg";
import wallet from "../../assets/my_activity/guardian/ic_wallet.svg";
import timer from "../../assets/my_activity/guardian/ic_timer.svg";
import GrayBtn from "@/components/my_activity/GrayBtn";
import coupon from "../../assets/my_activity/ic_coupon.svg";
import Toast from "@/components/Toast";
import { useState } from "react";

interface Coupon {
  id: string;
  title: string;
  mileage: number;
}

const UseMileage = () => {
  // pseudo table data for mileage use options
  const useMileageData = [
    { id: "foundation", title: "한국장애인재단 5천원 후원", mileage: 40 },
    { id: "starbucks", title: "스타벅스 2만원 쿠폰", mileage: 200 },
  ];

  const [showToast, setShowToast] = useState(false);
  const [selectedCoupon, setSelectedCoupon] = useState<Coupon | null>(null);

  return (
    <main className="mx-auto w-full min-h-screen bg-[var(--color-root-strong)] relative">
      <Toast
        message={selectedCoupon?.title + "을 구매했어요" || ""}
        show={showToast}
        onClose={() => {
          setShowToast(false);
          setTimeout(() => {
            setSelectedCoupon(null);
          }, 1000);
        }}
      />

      <section className="px-[16px] pb-[8px] bg-[var(--color-fill-static)]">
        <section className="flex justify-between items-center px-[4px] py-[13px] h-[60px]">
          <button className="cursor-pointer">
            <img src={arrowBack} alt="" />
          </button>
          <h1 className="text-subhead font-[500]">마일리지 사용</h1>
          <div></div>
        </section>

        <RoundBox
          className="flex flex-col gap-[12px] px-[20px] py-[10px] border-[1px]"
          style={{ borderColor: "rgba(146, 157, 173, 0.16)" }}
        >
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
        </RoundBox>
        <p className="mt-[8px] text-[var(--color-assistive)] text-footnote font-[400]">
          한 시간 도와줄 때마다 100마일리지를 드려요.
        </p>
      </section>

      <section className="px-[16px]">
        <h2 className="mt-[16px] mb-[12px] text-subhead font-[700]">
          사용 가능 목록
        </h2>

        {useMileageData.map((item) => (
          <RoundBox
            key={item.id}
            className="flex flex-col gap-[12px] px-[16px] py-[12px] my-[16px] w-full"
          >
            <section className="flex justify-between items-center">
              <div className="flex items-center gap-[12px]">
                <div className="size-[48px] rounded-full bg-[#ddd]"></div>
                <div className="flex flex-col gap-[2px]">
                  <p className="text-[var(--color-subhead)] text-body font-[500]">
                    {item.title}
                  </p>
                  <p className="text-[var(--color-additive)] text-footnote font-[400] text-start">
                    {item.mileage} 마일리지
                  </p>
                </div>
              </div>
              <GrayBtn
                className="cursor-pointer"
                onClick={() => {
                  setSelectedCoupon(item);
                  setShowToast(true);
                }}
              >
                <img src={coupon} alt="" />
                사용
              </GrayBtn>
            </section>
          </RoundBox>
        ))}
      </section>
    </main>
  );
};

export default UseMileage;
