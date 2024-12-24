import { IInput } from '@/Shared/types/form.ts';
import { PATHS } from '@/Shared/consts';

export const Inputs: IInput<unknown>[] = [
    {
        name: 'suggestion',
        placeholder: 'Предложение',
        required: true,
        query: {
            source: 'suggestion',
            hintLabel: 'Показать предложение',
            key: 'id',
            label: 'id',
            path: PATHS.REALTOR.SUGGESTION.ABSOLUTE,
        },
    },
    {
        name: 'requirement',
        placeholder: 'Потребность',
        required: true,
        query: {
            source: 'requirement',
            key: 'id',
            label: 'id',
            hintLabel: 'Показать потребность',
            path: PATHS.REALTOR.REQUIREMENT.ABSOLUTE,
        },
    },
];