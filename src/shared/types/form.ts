type IReturnSubmit = {
    msg: string;
    status: EValidationStatus.ERROR
} | {
    status: EValidationStatus.SUCCESS
}

export interface IForm<T> {
    inputs: IInput<T>[]

    customOnSubmit?: (res: T) => IReturnSubmit | void | false
}

export enum EValidationStatus {
    ERROR,
    SUCCESS
}

export type TInputType = 'email' | 'text' | "number" | "phone" | "select"

export interface IInput<T, K extends boolean = false> {
    name: K extends false ? string : keyof T
    placeholder?: string;
    required?: boolean
    type?: TInputType
    min?: number
    max?: number
    selects?: string[]
}