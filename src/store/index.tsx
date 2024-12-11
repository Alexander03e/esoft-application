import { create, StateCreator } from 'zustand';
import { IAppActions, IAppState } from './types';

type AppSlice = IAppState & IAppActions;

const appSlice: StateCreator<AppSlice> = set => ({
    role: null,

    currentWindow: null,

    setWindow: window => {
        set({ currentWindow: window });
    },
    setRole: role => {
        set({ role });
    },
});

export const useAppStore = create<AppSlice>(appSlice);

export const getRole = useAppStore.getState().role;
export const changeRole = useAppStore.getState().setRole;
