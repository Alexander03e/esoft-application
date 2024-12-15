import { TRole } from '../types';

export const PATHS = {
    INDEX: '/',

    REALTOR: {
        INDEX: '/realtor',

        MAIN: {
            ABSOLUTE: '/realtor/',
        },

        AGENTS: {
            ABSOLUTE: '/realtor/agent',
        },

        MOBILE: {
            ABSOLUTE: "/realtor/mobile",
            CREATE: "/realtor/mobile/create",
            UPDATE: "/realtor/mobile/update/:id"
        },

        CLIENTS: {
            INDEX: '/clients',
            ABSOLUTE: '/realtor/client',
            CREATE: '/realtor/client/create',
            UPDATE: '/realtor/client/update/:id',
        },

        ESTATE: {
            INDEX: '/estate',
            ABSOLUTE: '/realtor/estate',
            CREATE: '/realtor/estate/create',
            UPDATE: '/realtor/estate/update/:id',
        },
        REQUIREMENT: {
            INDEX: '/requirement',
            ABSOLUTE: "/realtor/requirement",
            CREATE: "/realtor/requirement/create",
            UPDATE: "/realtor/requirement/update/:id",
        }
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
    REQUIREMENT: 'requirement',
    EVENT: "event"
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
        [PATHS.REALTOR.ESTATE.ABSOLUTE]: 'Недвижимость',
        [PATHS.REALTOR.REQUIREMENT.ABSOLUTE]: 'Потребности',
    },
};


export const TRANSLATES: Record<string, Record<string, string>> = {
    [ENTITIES.CLIENT]: {
        index: "Клиенты",
        show: "клиента",
        create: "клиента",
        edit: "клиента"
    },
    [ENTITIES.AGENT]: {
        index: "Риелторы",
        show: "риелтора",
        create: "риелтора",
        edit: "риелтора"
    },
    [ENTITIES.ESTATE]: {
        index: "Недвижимость",
        show: "недвижимость",
        create: "недвижимость",
        edit: "недвижимости"
    },
    [ENTITIES.REQUIREMENT]: {
        index: "Потребности",
        show: "потребность",
        create: "потребность",
        edit: "потребности"
    },
    [ENTITIES.EVENT]: {
        index: "Событие",
        show: "событие",
        create: "события",
        edit: "событие"
    }
}


export const ESTATE_TYPES = {
    FLAT: 'Квартира',
    AREA: "Земля",
    HOUSE: "Дом"
}
