import { IEstate } from '../Estate/types.ts';
import { IClient } from '../Clients/types.ts';
import { IAgent } from '../Agents/types.ts';

export interface ISuggestion {
    id: number;
    estate: number;
    client: number;
    agent: number;
    price: number;
    transaction?: number;
}

export interface ISuggestionListItem {
    id: number;
    estate: IEstate,
    client: IClient,
    agent: IAgent,
    price: number
    transaction?: number;
}