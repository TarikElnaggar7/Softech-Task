import { Injectable } from '@angular/core';
import { Observable, map, of } from 'rxjs';
import { ProductInterface } from '../interfaces/product.interface';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  getProducts(): Observable<ProductInterface[]> {
    return of(JSON.parse(localStorage.getItem('products')!));
  }

  getProductById(id: number): Observable<ProductInterface> {
    return this.getProducts().pipe(
      map((products) => products.find((product) => product.ProductId == id)!)
    );
  }

  editProductQuantity(productId: number, quantity: number) {
    const products = JSON.parse(localStorage.getItem('products')!);
    products.forEach((product: ProductInterface) => {
      if (product.ProductId == productId) {
        product.AvailablePieces -= quantity;
      }
    });
    localStorage.setItem('products', JSON.stringify(products));
  }
}
