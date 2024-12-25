import { IClient } from '../Clients/types.ts';
import { IAgent } from '../Agents/types.ts';

/**
 * Интерфейс требования
 *
 * @prop {number} id - айди требования
 * @prop {number} client - айди клиента
 * @prop {number} agent - айди агента
 * @prop {'FLAT' | 'HOUSE' | 'AREA'} type - тип недвижимости
 * @prop {string} city - город
 * @prop {string} street - улица
 * @prop {string} homeNumber - номер дома
 * @prop {string} flatNumber - номер квартиры
 * @prop {number} minPrice - минимальная цена
 * @prop {number} maxPrice - максимальная цена
 * @prop {number} minArea - минимальная площадь
 * @prop {number} maxArea - максимальная площадь
 * @prop {number} minCountOfRooms - минимальное количество комнат
 * @prop {number} maxCountOfRooms - максимальное количество комнат
 * @prop {number} minFloor - минимальный этаж
 * @prop {number} maxFloor - максимальный этаж
 * @prop {number} minCountOfFloors - минимальное количество этажей
 * @prop {number} maxCountOfFloors - максимальное количество этажей
 * @prop {number} transaction - айди сделки
 */
export interface IRequirement {
    id: number;
    client: number;
    agent: number;
    type: 'FLAT' | 'HOUSE' | 'AREA';
    city: string;
    street: string;
    homeNumber: string;
    flatNumber: string;
    minPrice: number;
    maxPrice: number;
    minArea: number;
    maxArea: number;
    minCountOfRooms: number;
    maxCountOfRooms: number;
    minFloor: number;
    maxFloor: number;
    minCountOfFloors: number;
    maxCountOfFloors: number;
    transaction: number;
}

/**
 * Интерфейс ответа требования
 *
 * @prop {number} id - айди требования
 * @prop {IClient} client - объект клиента
 * @prop {IAgent} agent - объект агента
 * @prop {'FLAT' | 'HOUSE' | 'AREA'} type - тип недвижимости
 * @prop {string} city - город
 * @prop {string} street - улица
 * @prop {string} homeNumber - номер дома
 * @prop {string} flatNumber - номер квартиры
 * @prop {number} minPrice - минимальная цена
 * @prop {number} maxPrice - максимальная цена
 * @prop {number} minArea - минимальная площадь
 * @prop {number} maxArea - максимальная площадь
 * @prop {number} minCountOfRooms - минимальное количество комнат
 * @prop {number} maxCountOfRooms - максимальное количество комнат
 * @prop {number} minFloor - минимальный этаж
 * @prop {number} maxFloor - максимальный этаж
 * @prop {number} minCountOfFloors - минимальное количество этажей
 * @prop {number} maxCountOfFloors - максимальное количество этажей
 * @prop {number} transaction - айди сделки
 */
export interface IRequirementResponse {
    id: number;
    client: IClient;
    agent: IAgent;
    type: 'FLAT' | 'HOUSE' | 'AREA';
    city: string;
    street: string;
    homeNumber: string;
    flatNumber: string;
    minPrice: number;
    maxPrice: number;
    minArea: number;
    maxArea: number;
    minCountOfRooms: number;
    maxCountOfRooms: number;
    minFloor: number;
    maxFloor: number;
    minCountOfFloors: number;
    maxCountOfFloors: number;
    transaction: number;
}
