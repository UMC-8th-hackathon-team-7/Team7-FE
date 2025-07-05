import {
  createContext,
  useState,
  type ReactNode,
  type Dispatch,
  type SetStateAction,
} from "react";

export interface BottomBarContextType {
  pageMenu: number;
  setPageMenu: Dispatch<SetStateAction<number>>;
}

// ① 컨텍스트 객체를 named export
const BottomBarContext = createContext<BottomBarContextType | undefined>(
  undefined
);

interface BottomBarProviderProps {
  children: ReactNode;
}

// ② 프로바이더를 named export (default로도 내보내도 되지만 구분이 편합니다)
export const BottomBarProvider = ({ children }: BottomBarProviderProps) => {
  const [pageMenu, setPageMenu] = useState<number>(1);

  return (
    <BottomBarContext.Provider value={{ pageMenu, setPageMenu }}>
      {children}
    </BottomBarContext.Provider>
  );
};

export default BottomBarContext;
