import { TRole } from '../types';

export const PATHS = {
    INDEX: '/',

    REALTOR: {
        INDEX: '/realtor',

        MAIN: {
            ABSOLUTE: '/realtor/',
        },

        AGENTS: {
            ABSOLUTE: '/realtor/agents',
        },

        CLIENTS: {
            INDEX: '/clients',
            ABSOLUTE: '/realtor/clients',
            CREATE: '/realtor/clients/create',
            UPDATE: '/realtor/clients/update/:id',
        },
    },

    CLIENT: {
        INDEX: '/client',

        MAIN: {
            ABSOLUTE: '/client/',
        },
    },
};

export const ENTITIES = {
    CLIENT: 'client',
    ESTATE: 'estate',
    AGENT: 'agent',
};

type TRoleWithoutNull = Exclude<TRole, null>;

export const USER_MENU: Record<TRoleWithoutNull, Record<string, string>> = {
    CLIENT: {
        [PATHS.CLIENT.MAIN.ABSOLUTE]: 'Главная',
    },
    REALTOR: {
        [PATHS.REALTOR.MAIN.ABSOLUTE]: 'Главная',
        [PATHS.REALTOR.AGENTS.ABSOLUTE]: 'Агенты',
        [PATHS.REALTOR.CLIENTS.ABSOLUTE]: 'Клиенты',
    },
};


export const TRANSLATES: Record<string, Record<string, string>> = {
    clients: {
        index: "Клиенты",
        show: "клиента",
        create: "клиента",
        edit: "клиента"
    },
    agents: {
        index: "Риелторы",
        show: "риелтора",
        create: "риелтора",
        edit: "риелтора"
    }
}
