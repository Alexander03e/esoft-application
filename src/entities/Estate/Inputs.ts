import { IInput } from "@/Shared/types/form";

export const Inputs: IInput<unknown>[] = [
    {
        name: 'area',
        placeholder: "Area"
    },
    {
        name: 'city',
        required: false,
        placeholder: "Город"
    },
    {
        name: "street",
        required: false,
        placeholder: "Улица"
    },
    {
        name: "flatNumber", // номер квартиры
        placeholder: "Номер квартиры",
        required: false
    },
    {
        name: "homeNumber", // номер дома,
        placeholder: "Номер дома",
        required: false
    },
    {
        name: 'latitude', // широта,
        placeholder: "Широта",
        required: false
    },
    {
        name: 'longitude', // долгота,
        placeholder: "Долгота",
        required: false
    },
    {
        name: 'countOfFloors',
        placeholder: "Количество этажей"
    },
    {
        name: "countOfRooms",
        placeholder: "Количество комнат",
    },
    {
        name: "floor",
        placeholder: "Этаж"
    },
    {
        name: "type",
        placeholder: "Тип",
        type: 'select',
        selects: ["AREA", "HOUSE", "FLAT"]
    }
]