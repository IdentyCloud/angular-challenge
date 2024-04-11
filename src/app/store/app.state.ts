import { ActionReducerMap } from '@ngrx/store';
import { usersReducer } from './reducers/users.reducers';
import { UserState } from '../interfaces/user.state.interface';

export interface AppState {
  users: UserState;
}

export const ROOT_REDUCERS: ActionReducerMap<AppState> = {
  users: usersReducer,
};
