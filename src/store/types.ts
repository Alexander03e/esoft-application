import { TRole } from "@/Shared/types"


export enum EWindowType {
    CREATE = 'create',
    EDIT = 'edit',
    SHOW = 'show',
    LIST = 'list'
}

type ContentType = {
    action: EWindowType
    name: string
} | null

export interface IAppState {
    resource: string | null
    role: TRole
    content: ContentType
      
    currentWindow: string | null
}

export interface IAppActions {
    setResource: (res: string | null) => void
    setRole: (role: TRole) => void
    setWindow: (window: string | null) => void
    setContent: (content: ContentType) => void
}