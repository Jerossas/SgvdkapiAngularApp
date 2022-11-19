import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Order } from "../../model/Order";
import { OrderService } from "../order-management.service";

@Injectable()
export class OrderRepository {
  private orders: Order[] = [];
  private loaded: boolean = false;

  constructor(private orderService: OrderService) { }

  loadOrders() {
    this.loaded = true;
    this.orderService.getOrders().subscribe(orders => this.orders = orders);
  }

  getOrders(): Order[] {
    if (!this.loaded) {
      this.loadOrders();
    }
    return this.orders;
  }

  saveOrder(order: Order): Observable<Order> {
    return this.orderService.saveOrder(order);
  }

  deleteOrder(id: number) {
    this.orderService.deleteOrder(id).subscribe(order => {
      this.orders.splice(this.orders.findIndex(o => id == o.id));
    });
    this.loadOrders()
  }
}