import shoe_black from "@/assets/board/ic_shoe/ic_shoe_black.svg";
import shoe from "@/assets/board/ic_shoe/ic_shoe.svg";
import type { IconProps } from "./types";

const ShoeIcon = ({ filled = false }: IconProps) => {
  return <img src={filled ? shoe_black : shoe} alt="" />;
};

export default ShoeIcon;
