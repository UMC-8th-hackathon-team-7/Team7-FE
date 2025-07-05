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
  help: HelpData | null;
  setHelp: (data: HelpData) => void;
}

export const useHelpStore = create<HelpStore>((set) => ({
  help: null,
  setHelp: (data) => set({ help: data }),
}));