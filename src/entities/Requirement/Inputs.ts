import { IInput } from '@/Shared/types/form.ts';

// Инпуты, которые есть в формах предложений
export const Inputs: IInput<unknown>[] = [
    {
        name: "client",
        required: true,
        placeholder: "Клиент",
        type: "select",
        selects: ['156', '202', '302', '303', '304'],
        translateOptions: ['Олег', 'Иван', 'Александр', 'Олег', 'Иван']
    },
    {
        name: "agent",
        required: true,
        type: "select",
        placeholder: "Риелтор",
        selects: ['52', '255', '256', '257'],
        translateOptions: ['Admin', 'Олег', 'Антон', 'Ffewf']
    },
    {
        name: "type",
        type: "select",
        selects: ['FLAT', "HOUSE", "AREA"],
        translateOptions: ['Квартира', 'Дом', 'Земля'],
        required: true
    },
    {
        name: "city",
        placeholder: "Город"
    },
    {
        name: "street",
        placeholder: "Адрес"
    },
    {
        name: "minPrice",
        placeholder: "Мин.цена",
        type: "number",
        min: 1,
    },
    {
        name: "homeNumber",
        placeholder: "Номер дома",
    },
    {
      name: "flatNumber",
      placeholder: "Номер квартиры",
    },
    {
        name: "maxPrice",
        placeholder: "Макс.цена",
        type: "number",
        min: 1,
    },
]
