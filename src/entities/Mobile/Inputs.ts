import { IInput } from "@/Shared/types/form";

export const Inputs: IInput<unknown>[] = [
    {
        name: "comment",
        placeholder: "Комментарий",
    },
    {
        name: "typesOfIvent",
        type: "select",
        selects: ['MeetingWithTheClient', 'ShowingAnObject', 'ScheduledCall'],
        translateOptions: ['Встреча с клиентом', 'Показ', 'Запланированный звонок'],
        required: true,
        placeholder: "Тип события*"
    },
    {
        name: "dateTime",
        placeholder: "Время*",
        type: "datetime-local",
        required: true
    }
]