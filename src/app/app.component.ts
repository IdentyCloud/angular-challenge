import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { requestUsers } from './store/actions/users.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
  constructor(private store: Store<any>) {}

  ngOnInit(): void {
    this.store.dispatch(requestUsers());
  }
}
