import { IInput } from '@/Shared/types/form.ts';
import { RequirementCard } from './components/Card.tsx';

// Инпуты, которые есть в формах предложений
export const Inputs: IInput<unknown>[] = [
    {
        name: 'client',
        required: true,
        placeholder: 'Клиент',
        query: {
            label: 'firstname',
            source: 'client',
            key: 'id',
        },
        show: [
            // {
            //     source: 'client/suggestions',
            //     id: true,
            //     name: 'Показать предложения',
            //     renderItem: (data: any) => <RequirementCard {...data} />,
            // },
            {
                source: 'client/requirements',
                id: true,
                name: 'Показать потребности',
                renderItem: (data: any) => <RequirementCard {...data} />,
            },
        ],
        type: 'select',
    },
    {
        name: 'agent',
        required: true,
        query: {
            label: 'firstname',
            source: 'agent',
            key: 'id',
        },
        type: 'select',
        placeholder: 'Риелтор',
    },
    {
        name: 'city',
        placeholder: 'Город',
    },
    {
        name: 'street',
        placeholder: 'Улица',
    },

    {
        name: 'type',
        type: 'select',
        selects: ['FLAT', 'HOUSE', 'AREA'],
        translateOptions: ['Квартира', 'Дом', 'Земля'],
        required: true,
    },
    {
        name: 'maxArea',
        placeholder: 'Макс.площадь',
        type: 'number',
        min: 1,
        activeIf: [
            {
                type: 'FLAT',
            },
            {
                type: 'HOUSE',
            },
            {
                type: 'AREA',
            },
        ],
    },
    {
        name: 'minArea',
        placeholder: 'Мин.площадь',
        min: 1,
        type: 'number',
        activeIf: [
            {
                type: 'FLAT',
            },
            {
                type: 'HOUSE',
            },
            {
                type: 'AREA',
            },
        ],
    },
    {
        name: 'minCountOfRooms',
        placeholder: 'Мин.кол-во комнат',
        type: 'number',
        min: 1,
        activeIf: [
            {
                type: 'FLAT',
            },
            {
                type: 'HOUSE',
            },
        ],
    },
    {
        name: 'maxCountOfRooms',
        placeholder: 'Макс.кол-во комнат',
        type: 'number',
        min: 1,
        activeIf: [
            {
                type: 'FLAT',
            },
            {
                type: 'HOUSE',
            },
        ],
    },
    {
        name: 'minFloor',
        placeholder: 'Мин.этаж',
        type: 'number',
        min: 1,
        activeIf: [
            {
                type: 'FLAT',
            },
            {
                type: 'HOUSE',
            },
        ],
    },
    {
        name: 'maxFloor',
        placeholder: 'Макс.этаж',
        type: 'number',
        min: 1,
        activeIf: [
            {
                type: 'FLAT',
            },
            {
                type: 'HOUSE',
            },
        ],
    },
    {
        name: 'minPrice',
        placeholder: 'Мин.цена',
        type: 'number',
        min: 1,
    },
    {
        name: 'maxPrice',
        placeholder: 'Макс.цена',
        type: 'number',
        min: 1,
    },
];

export const HomeInputs: IInput<unknown>[] = [
    {
        name: 'client',
        required: true,
        placeholder: 'Клиент',
        query: {
            label: 'firstname',
            source: 'client',
            key: 'id',
        },
        type: 'select',
    },
    {
        name: 'agent',
        required: true,
        query: {
            label: 'firstname',
            source: 'agent',
            key: 'id',
        },
        type: 'select',
        placeholder: 'Риелтор',
    },
    {
        name: 'city',
        placeholder: 'Город',
    },
    {
        name: 'street',
        placeholder: 'Улица',
    },
    {
        name: 'maxArea',
        placeholder: 'Макс.площадь',
        type: 'number',
        min: 1,
    },
    {
        name: 'minArea',
        placeholder: 'Мин.площадь',
        min: 1,
        type: 'number',
    },
    {
        name: 'minCountOfRooms',
        placeholder: 'Мин.кол-во комнат',
        type: 'number',
        min: 1,
    },
    {
        name: 'maxCountOfRooms',
        placeholder: 'Макс.кол-во комнат',
        type: 'number',
        min: 1,
    },
    {
        name: 'minFloor',
        placeholder: 'Мин.этаж',
        type: 'number',
        min: 1,
    },
    {
        name: 'maxFloor',
        placeholder: 'Макс.этаж',
        type: 'number',
        min: 1,
    },
    {
        name: 'minPrice',
        placeholder: 'Мин.цена',
        type: 'number',
        min: 1,
    },
    {
        name: 'maxPrice',
        placeholder: 'Макс.цена',
        type: 'number',
        min: 1,
    },
];

export const FlatInputs: IInput<unknown>[] = [
    {
        name: 'client',
        required: true,
        placeholder: 'Клиент',
        query: {
            label: 'firstname',
            source: 'client',
            key: 'id',
        },
        type: 'select',
    },
    {
        name: 'agent',
        required: true,
        query: {
            label: 'firstname',
            source: 'agent',
            key: 'id',
        },
        type: 'select',
        placeholder: 'Риелтор',
    },
    {
        name: 'city',
        placeholder: 'Город',
    },
    {
        name: 'street',
        placeholder: 'Улица',
    },
    {
        name: 'minPrice',
        placeholder: 'Мин.цена',
        type: 'number',
        min: 1,
    },
    {
        name: 'maxPrice',
        placeholder: 'Макс.цена',
        type: 'number',
        min: 1,
    },
    {
        name: 'maxArea',
        placeholder: 'Макс.площадь',
        type: 'number',
        min: 1,
    },
    {
        name: 'minArea',
        placeholder: 'Мин.площадь',
        min: 1,
        type: 'number',
    },
    {
        name: 'minCountOfRooms',
        placeholder: 'Мин.кол-во комнат',
        type: 'number',
        min: 1,
    },
    {
        name: 'maxCountOfRooms',
        placeholder: 'Макс.кол-во комнат',
        type: 'number',
        min: 1,
    },
    {
        name: 'minFloor',
        placeholder: 'Мин.этаж',
        type: 'number',
        min: 1,
    },
    {
        name: 'maxFloor',
        placeholder: 'Макс.этаж',
        type: 'number',
        min: 1,
    },
];

export const AreaInputs: IInput<unknown>[] = [
    {
        name: 'client',
        required: true,
        placeholder: 'Клиент',
        query: {
            label: 'firstname',
            source: 'client',
            key: 'id',
        },
        type: 'select',
    },
    {
        name: 'agent',
        required: true,
        query: {
            label: 'firstname',
            source: 'agent',
            key: 'id',
        },
        type: 'select',
        placeholder: 'Риелтор',
    },
    {
        name: 'city',
        placeholder: 'Город',
    },
    {
        name: 'street',
        placeholder: 'Улица',
    },
    {
        name: 'minPrice',
        placeholder: 'Мин.цена',
        type: 'number',
        min: 1,
    },
    {
        name: 'maxPrice',
        placeholder: 'Макс.цена',
        type: 'number',
        min: 1,
    },
    {
        name: 'maxArea',
        placeholder: 'Макс.площадь',
        type: 'number',
        min: 1,
    },
    {
        name: 'minArea',
        placeholder: 'Мин.площадь',
        min: 1,
        type: 'number',
    },
];

export const GET_INPUTS = {
    FLAT: FlatInputs,
    HOUSE: HomeInputs,
    AREA: AreaInputs,
};