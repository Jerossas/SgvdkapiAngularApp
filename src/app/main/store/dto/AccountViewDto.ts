import { AccountType } from "../model/account/AccountType";
import { AccountProfileViewDto } from "./AccountProfileViewDto";

export interface AccountViewDto {
    id: number;
    accountType: AccountType;
    description: string;
    price: number;
    imageUrl: string;
    profiles: AccountProfileViewDto[];
}