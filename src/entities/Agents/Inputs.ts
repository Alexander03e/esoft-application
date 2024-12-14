import { IInput } from '@/Shared/types/form';

export const inputs: IInput[] = [
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
    },
    
];
