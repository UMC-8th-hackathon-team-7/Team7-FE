import sofa_black from "@/assets/board/ic_sofa/ic_sofa_black.svg";
import sofa from "@/assets/board/ic_sofa/ic_sofa.svg";
import type { IconProps } from "./types";

const SofaIcon = ({ filled = false }: IconProps) => {
  return <img src={filled ? sofa_black : sofa} alt="" />;
};

export default SofaIcon;
