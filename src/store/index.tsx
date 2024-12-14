import { StateCreator, create } from 'zustand';
import { IAppActions, IAppState } from './types';
import { persist, devtools } from 'zustand/middleware';

// import { create } from './utils';
type AppSlice = IAppState & IAppActions;

const appSlice: StateCreator<AppSlice, [['zustand/devtools', unknown]]> = set => ({
    role: null,
    content: null,
    currentWindow: null,
    resource: null,

    setResource: resource => {
        set({ resource });
    },

    setContent: content => {
        set({ content });
    },

    setWindow: window => {
        set({ currentWindow: window });
    },
    setRole: role => {
        set({ role });
    },
});

export const useAppStore = create<AppSlice>()(
    devtools(persist(appSlice, { name: 'appStore', partialize: state => state })),
);

export const getRole = useAppStore.getState().role;
export const changeRole = useAppStore.getState().setRole;
