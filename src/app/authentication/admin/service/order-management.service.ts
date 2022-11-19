import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Order } from "../model/Order";

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  private apiUrl;

  constructor(private http: HttpClient) {
    this.apiUrl = "http://localhost:8080/api/admin/management/orders/";
  }

  public getOrders(): Observable<Order[]> {
    return this.http.get<Order[]>(this.apiUrl + 'list');
  }

  public saveOrder(order: Order): Observable<Order> {
    return this.http.post<Order>(`${this.apiUrl}save`, order);
  }

  public deleteOrder(id: number): Observable<Order> {
    return this.http.delete<Order>(`${this.apiUrl}delete/${id}`);
  }
}
