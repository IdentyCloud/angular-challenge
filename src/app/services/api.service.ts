import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { catchError, map, Observable } from 'rxjs';

import { UserI } from '../interfaces/user.interface';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  #http = inject(HttpClient);

  getAllUsers(): Observable<any> {
    return this.#http
      .get<UserI>(`https://jsonplaceholder.typicode.com/users`)
      .pipe(
        map((resp) => {
          return resp;
        }),
        catchError(async (err) => console.log(err))
      );
  }
}
