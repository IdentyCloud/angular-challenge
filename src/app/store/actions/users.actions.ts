import { createAction, props } from '@ngrx/store';
import { UserI } from '../../interfaces/user.interface';

export const requestUsers = createAction('[GET | Users] REQUEST');

export const responseUsers = createAction(
  '[GET | Users] RESPONSE',
  props<{ items: UserI[] }>()
);
