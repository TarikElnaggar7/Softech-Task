import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsModule } from './features/products/products.module';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'orders',
  },
  {
    path: 'products',
    loadChildren: () =>
      import('./features/products/products.module').then(
        (m) => m.ProductsModule
      ),
  },
  {
    path: 'orders',
    loadChildren: () =>
      import('./features/orders/orders.module').then((m) => m.OrdersModule),
  },
  {
    path: 'add-order',
    loadChildren: () =>
      import('./features/add-order/add-order.module').then(
        (m) => m.AddOrderModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
