import { IEstate } from '../Estate/types.ts';
import { IClient } from '../Clients/types.ts';
import { IAgent } from '../Agents/types.ts';

/**
 * Интерфейс предложения
 *
 * @prop {number} id - айди предложения
 * @prop {number} estate - айди недвижимости
 * @prop {number} client - айди клиента
 * @prop {number} agent - айди агента
 * @prop {number} price - цена предложения
 * @prop {number} [transaction] - айди сделки (опционально)
 */
export interface ISuggestion {
    id: number;
    estate: number;
    client: number;
    agent: number;
    price: number;
    transaction?: number;
}

/**
 * Интерфейс элемента списка предложений
 *
 * @prop {number} id - айди предложения
 * @prop {IEstate} estate - объект недвижимости
 * @prop {IClient} client - объект клиента
 * @prop {IAgent} agent - объект агента
 * @prop {number} price - цена предложения
 * @prop {number} [transaction] - айди сделки (опционально)
 */
export interface ISuggestionListItem {
    id: number;
    estate: IEstate;
    client: IClient;
    agent: IAgent;
    price: number;
    transaction?: number;
}
