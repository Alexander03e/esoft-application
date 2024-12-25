import { IInput } from '@/Shared/types/form';

export const Inputs: IInput<unknown>[] = [
    {
        name: 'comment',
        placeholder: 'Комментарий',
    },
    {
        name: 'typesOfIvent',
        type: 'select',
        selects: ['MeetingWithTheClient', 'ShowingAnObject', 'ScheduledCall'],
        translateOptions: ['Встреча с клиентом', 'Показ', 'Запланированный звонок'],
        required: true,
        placeholder: 'Тип события*',
    },
    {
        name: 'startDateTime',
        placeholder: 'Время начала',
        type: 'datetime-local',
        required: true,
    },
    {
        name: 'endDateTime',
        placeholder: 'Время конца',
        type: 'datetime-local',
        required: true,
    },
];
