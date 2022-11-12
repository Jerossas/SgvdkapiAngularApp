import { AccountProfile } from "./AccountProfile";
import { AccountType } from "./AccountType";

export class AccountC {
    constructor(
        public id?: number,
        public email?: string,
        public password?: string,
        public accountType?: AccountType,
        public description?: string,
        public price?: number,
        public imageUrl?: string,
        public profiles?: AccountProfile[]
    ) { }
}