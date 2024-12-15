import { create, StateCreator } from "zustand";
import { IMobileSlice } from "./types";
import { devtools, persist } from "zustand/middleware";

const mobileSlice: StateCreator<IMobileSlice, [['zustand/devtools', unknown]]> = (set) => ({
    realtorId: null,

    setRealtorId: (id) => {
        set({realtorId: id})
    }
});

export const useMobileStore = create<IMobileSlice>()(
    devtools(persist(mobileSlice, { name: 'mobileStore', partialize: state => state })))