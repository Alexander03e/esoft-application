import { IRequirement } from '../Requirement/types.ts';
import { ISuggestion } from '../Suggestion/types.ts';

export interface ITransaction {
    // потребность
    id: number
    requirement: number,
    suggestion: number
    priceForBuyer: number;
    priceForBuyerAgent: number;
    priceForSeller: number
    priceForSellerAgent: number
    priceForCompany: number
}

export interface IResponseTransaction extends Omit<ITransaction, 'requirement' | 'suggestion'> {
    requirement: IRequirement,
    suggestion: ISuggestion
}