import { IRequirement } from '../Requirement/types.ts';
import { ISuggestion } from '../Suggestion/types.ts';

/**
 * Интерфейс сделки
 *
 * @prop {number} id - айди сделки
 * @prop {number} requirement - айди требования
 * @prop {number} suggestion - айди предложения
 * @prop {number} priceForBuyer - цена для покупателя
 * @prop {number} priceForBuyerAgent - комиссия агента покупателя
 * @prop {number} priceForSeller - цена для продавца
 * @prop {number} priceForSellerAgent - комиссия агента продавца
 * @prop {number} priceForCompany - комиссия компании
 */
export interface ITransaction {
    id: number;
    requirement: number;
    suggestion: number;
    priceForBuyer: number;
    priceForBuyerAgent: number;
    priceForSeller: number;
    priceForSellerAgent: number;
    priceForCompany: number;
}

/**
 * Интерфейс ответа сделки
 *
 * @prop {IRequirement} requirement - объект требования
 * @prop {ISuggestion} suggestion - объект предложения
 */
export interface IResponseTransaction extends Omit<ITransaction, 'requirement' | 'suggestion'> {
    requirement: IRequirement;
    suggestion: ISuggestion;
}
