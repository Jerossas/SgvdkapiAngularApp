import { OrderDetail } from "./OrderDetail";
import { User } from "./User";

export class Order {
    constructor(
        public id?: number,
        public creationDate?: Date,
        public total?: number,
        public user?: User,
        public orderDetails?: OrderDetail[]
    ){}
}