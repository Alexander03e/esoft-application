import { IInput } from "@/Shared/types/form";

export const Inputs: IInput<unknown>[] = [
    {
        name: "comment",
        placeholder: "Комментарий",
        required: true
    },
    {
        name: "typesOfIvent",
        type: "select",
        selects: ['MeetingWithTheClient', 'ShowingAnObject', 'ScheduledCall'],
        translateOptions: ['Встреча с клиентом', 'Показ', 'Запланированный звонок'],
        required: true
    },
    {
        name: "dateTime",
        placeholder: "Время",
        type: "datetime-local",
        required: true
    }
]