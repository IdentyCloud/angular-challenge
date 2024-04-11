import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { selectLoading } from '../../store/selectors/users.selectors';
import { filterUsers } from '../../store/actions/users.actions';

@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
})
export class SearchBoxComponent implements OnInit {
  loading$: Observable<boolean> = new Observable();
  search: string = '';

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.loading$ = this.store.select(selectLoading as any);
  }

  onSearch(event: Event): void {
    if (event.target) {
      this.search = (event.target as HTMLInputElement).value
        .trim()
        .toLowerCase();
      console.log(this.search);
      this.store.dispatch(filterUsers({ search: this.search }));
    }
  }
}
