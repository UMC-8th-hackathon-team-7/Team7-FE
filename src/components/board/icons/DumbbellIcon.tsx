import dumbbell_black from "@/assets/board/ic_dumbbell/ic_dumbbell_black.svg";
import dumbbell from "@/assets/board/ic_dumbbell/ic_dumbbell.svg";
import type { IconProps } from "./types";

const DumbbellIcon = ({ filled = false }: IconProps) => {
  return <img src={filled ? dumbbell_black : dumbbell} alt="" />;
};

export default DumbbellIcon;
