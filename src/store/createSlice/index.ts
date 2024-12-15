import { create, StateCreator } from "zustand";
import { ICreateSlice } from "./types";
import { devtools } from "zustand/middleware";

const createSlice: StateCreator<ICreateSlice, [['zustand/devtools', unknown]]> = (set, get) => ({
    customInputs: null,
    options: null,

    setCustomInput(customInputs) {
        set({customInputs})
    },

    setOptions: (customOptions) => {
        if (customOptions === null) {
            set({options: null})
            return
        }
        
        const { options } = get()

        set({options: {...options, ...customOptions}})
    }
});

export const useCreateStore = create<ICreateSlice>()(
    devtools(createSlice,
))