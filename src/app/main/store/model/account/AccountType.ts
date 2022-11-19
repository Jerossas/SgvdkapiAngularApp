import { EAccountType } from "../../enum/EAccountType";

export class AccountType {
    public id: number;
    public name: EAccountType;

    constructor(id: number, name: EAccountType){
        this.id = id;
        this.name = name;
    }
}