import { IInput } from "@/Shared/types/form";

export const Inputs: IInput<unknown>[] = [
    {
        name: 'area',
        placeholder: "Площать",
        type: "number",
        required: false,
        activeIf: [
            {
                type: "AREA"
            },
            {
                type: "HOUSE"
            },
            {
                type: "FLAT"
            }
        ]
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
        required: false,
        type: "number"
    },
    {
        name: "homeNumber", // номер дома,
        placeholder: "Номер дома",
        required: false,
        type: "number"
    },
    {
        name: 'latitude', // широта,
        placeholder: "Широта",
        required: false,
        min: -90,
        max: 90,
        type: "number"
    },
    {
        name: 'longitude', // долгота,
        placeholder: "Долгота",
        required: false,
        min: -180,
        max: 180,
        type: "number"
    },
    {
        name: 'countOfFloors',
        placeholder: "Количество этажей",
        type: "number",
        required: false,
        activeIf: [
            {
                type: "HOUSE"
            },
            {
                type: "FLAT"
            }
        ]
    },
    {
        name: "countOfRooms",
        placeholder: "Количество комнат",
        type: "number",
        required: false,
        activeIf: [
            {
                type: "HOUSE"
            }
        ]
    },
    {
        name: "floor",
        placeholder: "Этаж",
        required: false,
        type: "number",
        activeIf: [
            {
                type: "FLAT"
            }
        ]
        
    },
    {
        name: "type",
        placeholder: "Выберите тип",
        type: 'select',
        required: true,
        selects: ["AREA", "HOUSE", "FLAT"]
    }
]