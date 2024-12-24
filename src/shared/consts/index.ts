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
            ABSOLUTE: '/realtor/mobile',
            CREATE: '/realtor/mobile/create',
            UPDATE: '/realtor/mobile/update/:id',
        },

        SUGGESTION: {
            INDEX: '/suggestion',
            ABSOLUTE: '/realtor/suggestion',
            CREATE: '/realtor/suggestion/create',
            UPDATE: '/realtor/suggestion/update/:id',
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
            ABSOLUTE: '/realtor/requirement',
            CREATE: '/realtor/requirement/create',
            UPDATE: '/realtor/requirement/update/:id',
        },
        TRANSACTION: {
            INDEX: '/transaction',
            ABSOLUTE: '/realtor/transaction',
            CREATE: '/realtor/transaction/create',
            UPDATE: '/realtor/transaction/update/:id',
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
    REQUIREMENT: 'requirement',
    EVENT: 'event',
    SUGGESTION: 'suggestion',
    TRANSACTION: 'transaction',
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
        [PATHS.REALTOR.SUGGESTION.ABSOLUTE]: 'Предложения',
        [PATHS.REALTOR.TRANSACTION.ABSOLUTE]: 'Сделки',
    },
};


export const TRANSLATES: Record<string, Record<string, string>> = {
    [ENTITIES.CLIENT]: {
        index: 'Клиенты',
        show: 'клиента',
        create: 'клиента',
        edit: 'клиента',
    },
    [ENTITIES.AGENT]: {
        index: 'Риелторы',
        show: 'риелтора',
        create: 'риелтора',
        edit: 'риелтора',
    },
    [ENTITIES.ESTATE]: {
        index: 'Недвижимость',
        show: 'недвижимость',
        create: 'недвижимость',
        edit: 'недвижимости',
    },
    [ENTITIES.REQUIREMENT]: {
        index: 'Потребности',
        show: 'потребность',
        create: 'потребности',
        edit: 'потребности',
    },
    [ENTITIES.EVENT]: {
        index: 'Событие',
        show: 'событие',
        create: 'события',
        edit: 'событие',
    },
    [ENTITIES.SUGGESTION]: {
        index: 'Предложения',
        show: 'предложение',
        create: 'предложение',
        edit: 'предложение',
    },
    [ENTITIES.TRANSACTION]: {
        index: 'Сделки',
        show: 'сделку',
        create: 'сделку',
        edit: 'сделки',
    },
};


export const ESTATE_TYPES = {
    FLAT: 'Квартира',
    AREA: 'Земля',
    HOUSE: 'Дом',
};
