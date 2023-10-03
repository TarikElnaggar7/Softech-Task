import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  getProducts() {
    return of(JSON.parse(localStorage.getItem('products')!));
  }
}
