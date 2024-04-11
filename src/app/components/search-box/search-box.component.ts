import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { selectLoading } from '../../store/selectors/users.selectors';

@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
})
export class SearchBoxComponent implements OnInit {
  loading$: Observable<boolean> = new Observable();

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.loading$ = this.store.select(selectLoading as any);
  }
}
