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

export type TInputType = 'email' | 'text' | "number" | "phone"

export interface IInput<T = unknown> {
    name: string | keyof T
    placeholder?: string;
    required?: boolean
    type?: TInputType
}