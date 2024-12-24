import { IInput } from '@/Shared/types/form.ts';
import { PATHS } from '@/Shared/consts';

export const Inputs: IInput<unknown>[] = [
    {
        name: 'estate',
        type: 'select',
        query: {
            source: 'estate',
            key: 'id',
            label: 'id',
            path: PATHS.REALTOR.ESTATE.ABSOLUTE,
            hintLabel: 'Посмотреть недвижимость',
        },
        placeholder: 'Недвижимость',
        required: true,
    },
    {
        name: 'client',
        placeholder: 'Клиент',
        type: 'select',
        query: {
            source: 'client',
            key: 'id',
            label: 'firstname',
            path: PATHS.REALTOR.CLIENTS.ABSOLUTE,
            hintLabel: 'Посмотреть клиента',
        },
        required: true,
    },
    {
        placeholder: 'Риелтор',
        name: 'agent',
        type: 'select',
        query: {
            source: 'agent',
            key: 'id',
            label: 'firstname',
            path: PATHS.REALTOR.AGENTS.ABSOLUTE,
            hintLabel: 'Посмотреть риелтора',
        },
        required: true,
    },
    {
        name: 'price',
        type: 'number',
        min: 1,
        placeholder: 'Цена',
        required: true,
    },
];