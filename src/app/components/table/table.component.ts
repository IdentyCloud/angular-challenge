import { Component, Input, OnInit, OnChanges } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Store } from '@ngrx/store';

import {
  selectLoading,
  selectListUsers,
} from '../../store/selectors/users.selectors';

import { UserI } from 'src/app/interfaces/user.interface';

export interface ITableData extends Pick<any, 'id' | 'username' | 'email'> {
  firstname: string;
  surname: string;
}

type columns = 'firstname' | 'surname' | 'username' | 'email';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent implements OnInit, OnChanges {
  @Input() sortColumn: columns = 'firstname';
  @Input() sortDirection: 'asc' | 'desc' = 'asc';

  loading$: Observable<boolean> = new Observable();
  data$: Observable<ITableData[] | []> = new Observable();

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.loading$ = this.store.select(selectLoading as any);

    this.data$ = this.store.select(selectListUsers as any).pipe(
      map((users: any) => {
        return users.map((user: UserI) => {
          const arrayNames = user.name.split(' ');
          const firstname = arrayNames.shift();
          const surname = arrayNames.pop();
          const secondName = arrayNames.join(' ');

          return {
            id: user.id,
            username: user.username,
            email: user.email,
            firstname: `${firstname} ${secondName}`.trim(),
            surname: surname,
          };
        });
      })
    ) as Observable<ITableData[]>;
  }

  ngOnChanges(): void {
    this.sortData();
  }

  private sortData(): void {
    // @TODO
  }

  sortTable(sortColumn: columns): void {
    if (this.sortColumn === sortColumn) {
      this.sortDirection = this.sortDirection === 'asc' ? 'desc' : 'asc';
    } else {
      this.sortColumn = sortColumn;
      this.sortDirection = 'asc';
    }

    this.sortData();
  }
}
