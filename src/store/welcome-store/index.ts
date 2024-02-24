import { create } from "zustand";
import AsyncStorage from "@react-native-async-storage/async-storage";

interface WelcomeStoreState {
  showWelcome: boolean;
  setShowWelcome: (value: boolean) => Promise<void>;
  initialize: () => Promise<void>;
}

export const useWelcomeStore = create<WelcomeStoreState>((set) => ({
  showWelcome: true,
  setShowWelcome: async (value) => {
    await AsyncStorage.setItem("welcomeShown", JSON.stringify(value));
    set({ showWelcome: value });
  },
  initialize: async () => {
    try {
      const value = await AsyncStorage.getItem("welcomeShown");
      if (value !== null) {
        set({ showWelcome: JSON.parse(value) });
      }
    } catch (error) {
      console.error("Error initializing welcome store:", error);
    }
  },
}));
