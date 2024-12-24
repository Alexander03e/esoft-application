import { StateCreator } from 'zustand';
import { ICreateSlice } from './types';
import { devtools, persist } from 'zustand/middleware';
import { create } from '../utils';

const createSlice: StateCreator<ICreateSlice, [['zustand/devtools', unknown]]> = (set, get) => ({
    customInputs: null,
    options: null,

    setCustomInput(customInputs) {
        set({ customInputs });
    },

    setOptions: customOptions => {
        if (customOptions === null) {
            set({ options: null });
            return;
        }

        const { options } = get();

        set({ options: { ...options, ...customOptions } });
    },

    setDefaultValues: defaultValues => {
        const { options } = get();

        set({
            options: { ...options, defaultValues: { ...options?.defaultValues, ...defaultValues } },
        });
    },
});

export const useCreateStore = create<ICreateSlice>()(
    devtools(persist(createSlice, { name: 'createStore', partialize: state => state })),
);
