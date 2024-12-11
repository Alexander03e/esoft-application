import { TRole } from "@/Shared/types"


export interface IAppState {
    role: TRole
    currentWindow: string | null
}

export interface IAppActions {
    setRole: (role: TRole) => void
    setWindow: (window: string | null) => void
}