import { Component, inject } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { ProductInterface } from '../../interfaces/product.interface';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent {
  productService = inject(ProductsService);
  router = inject(Router);
  products$: Observable<ProductInterface[]> = this.productService.getProducts();

  addNewOrder(ProductId: number) {
    this.router.navigate(['add-order', ProductId]);
  }
}
