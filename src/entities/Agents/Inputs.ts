import { IInput } from '@/Shared/types/form';

export const inputs: IInput<unknown>[] = [
    {
        name: 'firstname',
        placeholder: 'Имя',
        required: true
    },
    {
        name: 'lastname',
        placeholder: 'Фамилия',
        required: true
    },
    {
        name: 'patronymic',
        placeholder: 'Отчество',
        required: true
    },
    {
        name: 'proportion',
        placeholder: 'Доля от комиссии',
        min: 0,
        max: 100,
        type: 'number'
    },
    
];
