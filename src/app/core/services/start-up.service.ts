import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { forkJoin, tap } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class StartUpService {
  http = inject(HttpClient);

  bootstrap() {
    return forkJoin([
      this.http.get('assets/mock-data/orders.json'),
      this.http.get('assets/mock-data/products.json'),
      this.http.get('assets/mock-data/users.json'),
    ]).pipe(
      tap(([orders, products, users]) => {
        localStorage.setItem('orders', JSON.stringify(orders));
        localStorage.setItem('products', JSON.stringify(products));
        localStorage.setItem('users', JSON.stringify(users));
      })
    );
  }
}
