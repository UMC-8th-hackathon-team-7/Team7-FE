import { create } from "zustand";

interface TargetProfile {
  name: string;
  age: number;
  region: string;
  note?: string;
  disabilityType?: string;
  disabilityLevel?: number;
}

interface User {
  id: string;
  name: string;
  age: number;
  region: string;
  badge: string;
  targetList: TargetProfile[];
}

interface UserStore {
  currentUser: User | null;
  login: (user: User) => void;
  logout: () => void;
}

export const useUserStore = create<UserStore>((set) => ({
  currentUser: null,
  login: (user) => set({ currentUser: user }),
  logout: () => set({ currentUser: null }),
}));

export const mockGuardian = {
  id: "guardian-001",
  name: "이승민",
  age: 49,
  region: "서울 마포구",
  badge: "5회차 도움",
  targetList: [
    {
      name: "이수성",
      age: 20,
      region: "서울 마포구",
      note: "계단이 많으면 어려워해요ㅠㅠ",
      disabilityType: "하지",
      disabilityLevel: 5,
    },
    {
      name: "김영희",
      age: 22,
      region: "서울 은평구",
      note: "오른손을 쓰기 어려워요",
      disabilityType: "우측 상지",
      disabilityLevel: 4,
    },
    {
      name: "김뭐뭐",
      age: 22,
      region: "서울 강북구",
      note: "왼손을 쓰기 어려워요",
      disabilityType: "좌측 상지",
      disabilityLevel: 4,
    },
  ],
};