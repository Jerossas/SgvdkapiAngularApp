import { Injectable } from "@angular/core";
import { AccountViewDto } from "../store/dto/AccountViewDto";

@Injectable()
export class Cart {
    public id: number | null = null;
    public creationDate: Date = new Date();
    public total: number = 0;
    public orderDetails: Line[] = [];
    public itemCount: number = 0;

    addOrderDetail(account: AccountViewDto, quantity: number = 1, name: string) {
        let orderDetail = this.orderDetails.find(orderDetail => orderDetail.account.id == account.id);
        if (orderDetail != undefined) {
            orderDetail.quantity += quantity;
            orderDetail.subTotal = orderDetail.quantity*account.price;
        } else {
            this.orderDetails.push(new Line(null, name, quantity, account.price, Number(quantity)*account.price, account));
        }
        this.recalculate();
    }
    updateQuantity(account: AccountViewDto, quantity: number) {
        let orderDetail = this.orderDetails.find(orderDetail => orderDetail.account.id == account.id);
        if (orderDetail != undefined) {
            orderDetail.quantity = Number(quantity);
            orderDetail.subTotal = Number(quantity) * account.price;
        }
        this.recalculate();
    }
    removeOrderDetail(id: number) {
        let index = this.orderDetails.findIndex(orderDetail => orderDetail.account.id == id);
        this.orderDetails.splice(index, 1);
        this.recalculate();
    }
    clear() {
        this.orderDetails = [];
        this.itemCount = 0;
        this.total = 0;
    }
    private recalculate() {
        this.itemCount = 0;
        this.total = 0;
        this.orderDetails.forEach(od => {
            this.itemCount += od.quantity;
            this.total += (od.quantity * od.account.price);
        })
    }
}

export class Line {
   
    constructor(
        public id: number | null,
        public name: string,
        public quantity: number,
        public price: number,
        public subTotal: number,
        public account: AccountViewDto
    ) {
        
    }
}