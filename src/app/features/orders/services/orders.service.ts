import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { OrdersInterface } from '../interfaces/order.interface';

@Injectable({
  providedIn: 'root',
})
export class OrdersService {
  getOrders(): Observable<OrdersInterface[]> {
    return of(JSON.parse(localStorage.getItem('orders')!));
  }
}
