import { Injectable } from '@angular/core';
import { Observable, map, of } from 'rxjs';
import { OrdersInterface } from '../interfaces/order.interface';

@Injectable({
  providedIn: 'root',
})
export class OrdersService {
  getOrders(): Observable<OrdersInterface[]> {
    return of(JSON.parse(localStorage.getItem('orders')!));
  }

  addOrder(order: Partial<OrdersInterface>) {
    const orders = JSON.parse(localStorage.getItem('orders')!);
    const Id = orders[orders.length - 1].OrderId + 1;
    orders.push({ ...order, OrderId: Id });
    localStorage.setItem('orders', JSON.stringify(orders));
  }
}
