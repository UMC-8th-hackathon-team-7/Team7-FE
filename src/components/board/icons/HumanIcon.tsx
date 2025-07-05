import person_black from "@/assets/board/ic_human/ic_person_black.svg";
import person from "@/assets/board/ic_human/ic_person.svg";
import type { IconProps } from "./types";

const HumanIcon = ({ filled = false }: IconProps) => {
  return <img src={filled ? person_black : person} alt="" />;
};

export default HumanIcon;
