import { createReducer, on } from '@ngrx/store';
import { UserState } from '../../interfaces/user.state.interface';
import {
  requestUsers,
  responseUsers,
  filterUsers,
} from '../actions/users.actions';

export const initialState: UserState = {
  loading: false,
  data: [],
  search: '',
};

export const usersReducer = createReducer(
  initialState,
  on(requestUsers, (state) => {
    return { ...state, loading: true };
  }),
  on(responseUsers, (state, { items }) => {
    return { ...state, loading: false, data: items };
  }),
  on(filterUsers, (state, { search }) => ({
    ...state,
    search,
  }))
);
