import { IInput } from '@/Shared/types/form';

export const inputs: IInput<unknown>[] = [
    {
        name: 'firstname',
        placeholder: 'Имя',
    },
    {
        name: 'lastname',
        placeholder: 'Фамилия',
    },
    {
        name: 'patronymic',
        placeholder: 'Отчество',
    },
    {
        name: 'email',
        placeholder: 'E-mail',
    },
    {
        name: 'phone',
        placeholder: 'Номер телефона',
    },
];
