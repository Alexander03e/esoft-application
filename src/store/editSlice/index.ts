import { create, StateCreator } from "zustand";
import { IEditSlice } from "./types";
import { devtools, persist } from 'zustand/middleware';

const editSlice: StateCreator<IEditSlice, [['zustand/devtools', unknown]]> = (set) => ({
    editData: null,

    setEditData: (data) => {
        set({editData: data})
    }
});

export const useEditStore = create<IEditSlice>()(
    devtools(persist(editSlice, { name: 'edit', partialize: state => state })))