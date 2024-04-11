import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { ApiService } from '../../services/api.service';

@Injectable()
export class UsersEffects {
  constructor(private actions$: Actions, private apiService: ApiService) {}

  requestUsers$ = createEffect(() =>
    this.actions$.pipe(
      ofType('[GET | Users] REQUEST'),
      mergeMap(() =>
        this.apiService.getAllUsers().pipe(
          map((items) => ({
            type: '[GET | Users] RESPONSE',
            items: items,
          })),
          catchError(() => EMPTY)
        )
      )
    )
  );
}
