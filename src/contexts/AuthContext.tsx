import Cookies from "js-cookie";
import React, { createContext, useState, type ReactNode } from "react";
// import { useLocation } from "react-router-dom";

// import axiosClient from "../services/api";

// import { setupAxiosInterceptors } from "../utils/AxiosInterceptors";

// import { ACCESS_TOKEN_EXP_TIME } from "../constants/tokenExpireTime";

// AuthContext에서 사용할 인터페이스 정의
export interface AuthContextType {
  isAuthenticated: boolean;
  userType: UserType;
  login: (accessToken: string, userType: UserType) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

interface AuthProviderProps {
  children: ReactNode;
}

export type UserType = "disabled" | "guardian";

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [userType, setUserType] = useState<UserType>("guardian");

  //   const location = useLocation();

  //   useEffect(() => {
  //     const accessToken = Cookies.get("accessToken");
  //     setIsAuthenticated(!!accessToken);
  //   }, [location]);

  const login = (accessToken: string, userType: UserType) => {
    Cookies.set("accessToken", accessToken, {
      secure: false,
      sameSite: "Strict",
    });

    setIsAuthenticated(true);
    setUserType(userType);
  };

  const logout = () => {
    //     Cookies.remove("accessToken");
    //     setUserNickname("username");
    //     localStorage.removeItem("userNickname");
    //     setIsAuthenticated(false);
  };

  //     try {
  //       const response = await axiosClient.post(
  //         "users/refresh-access-token",
  //         {},
  //         {
  //           params: {
  //             refresh_token: refreshToken,
  //           },
  //         }
  //       );
  //       const { accessToken } = response.data;
  //       Cookies.set("accessToken", accessToken, {
  //         expires: ACCESS_TOKEN_EXP_TIME,
  //         secure: true,
  //         sameSite: "Strict",
  //       });
  //       setIsAuthenticated(true);
  //       return accessToken;
  //     } catch (error) {
  //       console.error("Access token refresh failed:", error);
  //       logout();
  //       return null;
  //     }
  //   };

  //   useEffect(() => {
  //     // Axios 인터셉터 설정
  //     setupAxiosInterceptors({ refreshAccessToken, logout });
  //     // eslint-disable-next-line react-hooks/exhaustive-deps
  //   }, []);

  return (
    <AuthContext.Provider value={{ isAuthenticated, userType, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
