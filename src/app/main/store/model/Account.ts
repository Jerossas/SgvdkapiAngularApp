import { AccountProfile } from "./AccountProfile";
import { AccountType } from "./AccountType";

export interface Account {
    id: number;
    email: string;
    password: string;
    accountType: AccountType;
    description: string;
    price: number;
    imageUrl: string;
    profiles: AccountProfile[];
}