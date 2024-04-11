import { createSelector } from '@ngrx/store';
import { UserState } from '../../interfaces/user.state.interface';
import { AppState } from '../app.state';

export const selectItemsFeature = (state: AppState) => state.users;

export const selectListUsers = createSelector(
  selectItemsFeature,
  (state: UserState) =>
    state.data.filter((user) => user.name.toLowerCase().includes(state.search))
);

export const selectLoading = createSelector(
  selectItemsFeature,
  (state: UserState) => state.loading
);
