import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrdersComponent } from './components/orders/orders.component';
import { MatCardModule } from '@angular/material/card';
import { OrdersRoutingModule } from './orders-routing.module';
import { MatExpansionModule } from '@angular/material/expansion';

@NgModule({
  declarations: [OrdersComponent],
  imports: [
    CommonModule,
    OrdersRoutingModule,
    MatCardModule,
    MatExpansionModule,
  ],
})
export class OrdersModule {}
