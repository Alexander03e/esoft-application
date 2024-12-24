import { IInput } from '@/Shared/types/form.ts';

export const Inputs: IInput<unknown>[] = [
    {
        name: 'estate',
        type: 'select',
        query: {
            source: 'estate',
            key: 'id',
            label: 'id',
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