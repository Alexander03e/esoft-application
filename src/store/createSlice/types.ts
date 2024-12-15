import { IInput } from "@/Shared/types/form";

interface IOption {
    customLabel?: string
    defaultValues?: Record<string, string>
    // жесткий костыль для недвижимости, зарефачить потом (либо забить)
    specialType?: string
}

export interface ICreateSlice {
    customInputs: IInput<unknown>[] | null;
    options: IOption | null,

    setOptions: (val: IOption | null) => void;
    setCustomInput: (inputs: IInput<unknown>[] | null) => void;
}