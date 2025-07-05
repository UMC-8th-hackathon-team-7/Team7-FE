import { create } from "zustand";

interface HelpData {
  id: string;
  title: string;
  description: string;
  category: string;
  location: string;
  time: string;
  targetProfile: {
    name: string;
    age: number;
    region: string;
    note?: string;
    disabilityType?: string;
    disabilityLevel?: number;
  };
}

interface HelpStore {
  help: HelpData[];
  setHelp: (data: HelpData) => void;
  getHelpById: (id: string) => HelpData | undefined;
}

export const useHelpStore = create<HelpStore>((set, get) => ({
  help: [],
  setHelp: (data) => set((state) => ({ help: [...state.help, data] })),
  getHelpById: (id) => get().help.find((h) => h.id === id),
}));