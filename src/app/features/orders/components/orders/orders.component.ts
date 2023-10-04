import { Component, inject } from '@angular/core';
import { OrdersService } from '../../services/orders.service';
import { Observable, forkJoin, map, switchMap } from 'rxjs';
import { OrdersInterface } from '../../interfaces/order.interface';
import { UsersService } from 'src/app/core/services/users.service';
import { ProductsService } from 'src/app/features/products/services/products.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss'],
})
export class OrdersComponent {
  usersService = inject(UsersService);
  ordersService = inject(OrdersService);

  orders$: Observable<OrdersInterface[]> = this.ordersService.getOrders().pipe(
    map((orders) => orders.sort((a, b) => b.OrderId - a.OrderId)),
    switchMap((orders) =>
      forkJoin(
        orders.map((order) => this.usersService.getUserById(order.UserId))
      ).pipe(
        map((users) =>
          orders.map((order, i) => ({
            ...order,
            UserId: users[i]?.Name,
          }))
        )
      )
    )
  );
}
