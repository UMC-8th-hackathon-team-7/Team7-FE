import hand_black from "@/assets/board/ic_hand/ic_hand_black.svg";
import hand from "@/assets/board/ic_hand/ic_hand.svg";
import type { IconProps } from "./types";

const HandIcon = ({ filled = false }: IconProps) => {
  return <img src={filled ? hand_black : hand} alt="" />;
};

export default HandIcon;
