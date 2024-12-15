import { IInput } from "@/Shared/types/form";

export const Inputs: IInput<unknown>[] = [
    {
        name: "comment",
        placeholder: "Комментарий"
    },
    {
        name: "typesOfIvent",
        type: "select",
        selects: ['MeetingWithTheClient', 'ShowingAnObject', 'ScheduledCall']
    },
    {
        name: "dateTime",
        placeholder: "Время",
        type: "datetime-local"
    }
]