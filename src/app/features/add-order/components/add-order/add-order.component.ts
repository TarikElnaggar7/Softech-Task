import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { map, switchMap, tap } from 'rxjs';
import { UsersService } from 'src/app/core/services/users.service';
import { PaymentType } from 'src/app/features/orders/interfaces/order.interface';
import { OrdersService } from 'src/app/features/orders/services/orders.service';
import { ProductsService } from 'src/app/features/products/services/products.service';

@Component({
  selector: 'app-add-order',
  templateUrl: './add-order.component.html',
  styleUrls: ['./add-order.component.scss'],
})
export class AddOrderComponent {
  usersService = inject(UsersService);
  productService = inject(ProductsService);
  ordersService = inject(OrdersService);
  activatedRoute = inject(ActivatedRoute);
  router = inject(Router);
  UserId: string = '';
  OrderDate!: string;
  ProductId: number = 0;
  paymentMethod!: PaymentType;
  quantity: number = 1;
  maxQuantity: number = 0;

  product$ = this.activatedRoute.params.pipe(
    tap((params) => (this.ProductId = params['id'])),
    switchMap((param) => this.productService.getProductById(param['id'])),
    tap((product) => (this.maxQuantity = product.AvailablePieces))
  );
  users$ = this.usersService
    .getUsers()
    .pipe(
      map((users) => users.map((user) => ({ id: user.Id, name: user.Name })))
    );

  get paymentMethods() {
    return PaymentType;
  }

  increaseQuatnity() {
    if (this.quantity < this.maxQuantity) {
      this.quantity += 1;
    }
  }

  decreaseQuatnity() {
    if (this.quantity > 1) {
      this.quantity -= 1;
    }
  }

  saveOrder() {
    this.ordersService.addOrder({
      OrderDate: new Date().toString(),
      UserId: this.UserId,
      Products: [
        {
          ProductId: this.ProductId,
          Quantity: this.quantity,
        },
      ],
      PaymentType: this.paymentMethod,
    });
    this.productService.editProductQuantity(this.ProductId, this.quantity);
    this.router.navigate(['/orders']);
  }
}
