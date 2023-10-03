import { Injectable } from '@angular/core';
import { Observable, filter, map, of } from 'rxjs';
import { UserInterface } from '../interfaces/users';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  constructor() {}

  getUsers(): Observable<UserInterface[]> {
    return of(JSON.parse(localStorage.getItem('users')!));
  }

  getUserById(id: string): Observable<UserInterface> {
    return this.getUsers().pipe(
      map((users) => users.find((user) => user.Id == id)!)
    );
  }
}
