import { Injectable } from "@angular/core";
import { AccountViewDto } from "../store/dto/AccountViewDto";

@Injectable()
export class Cart {
    public lines: CartLine[] = [];
    public itemCount: number = 0;
    public cartPrice: number = 0;
    addLine(account: AccountViewDto, quantity: number = 1) {
        let line = this.lines.find(line => line.account.id == account.id);
        if (line != undefined) {
            line.quantity += quantity;
        } else {
            this.lines.push(new CartLine(account, quantity));
        }
        this.recalculate();
    }
    updateQuantity(account: AccountViewDto, quantity: number) {
        let line = this.lines.find(line => line.account.id == account.id);
        if (line != undefined) {
            line.quantity = Number(quantity);
        }
        this.recalculate();
    }
    removeLine(id: number) {
        let index = this.lines.findIndex(line => line.account.id == id);
        this.lines.splice(index, 1);
        this.recalculate();
    }
    clear() {
        this.lines = [];
        this.itemCount = 0;
        this.cartPrice = 0;
    }
    private recalculate() {
        this.itemCount = 0;
        this.cartPrice = 0;
        this.lines.forEach(l => {
            this.itemCount += l.quantity;
            this.cartPrice += (l.quantity * l.account.price);
        })
    }
}

export class CartLine {
    constructor(public account: AccountViewDto,
        public quantity: number) { }
    get lineTotal() {
        return this.quantity * this.account.price;
    }
}