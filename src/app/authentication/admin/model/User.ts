import { Order } from "./Order";
import { Role } from "./Role";

export class User {
    constructor(
        public id?: number,
        public name?: string,
        public lastname?: string,
        public phone?: string,
        public email?: string,
        public password?: string,
        public locked?: boolean,
        public enabled?: boolean,
        public role?: Role,
        public orders?: Order[]
    ){}
}