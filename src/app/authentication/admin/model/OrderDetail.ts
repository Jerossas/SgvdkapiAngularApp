import { Account } from "../../../main/store/model/account/Account";

export class OrderDetail {

    constructor(
        public id?: number, 
        public name?: string,
        public quantity?: number,
        public price?: number,
        public subTotal?: number,
        public account?: Account
    ){}
}