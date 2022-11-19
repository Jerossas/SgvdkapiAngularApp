import { Component } from '@angular/core';
import { Order } from '../../model/Order';
import { OrderRepository } from '../../service/repository/order-repository';

@Component({
  templateUrl: "order-table.component.html",
  styleUrls: ['./order-table.component.css']
})
export class OrderTableComponent {

  constructor(private repository: OrderRepository) { }

  getOrders(): Order[] {
    return this.repository.getOrders();
  }

  delete(id: number) {
    this.repository.deleteOrder(id);
  }
}
