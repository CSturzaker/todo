import { Component, OnInit } from '@angular/core'
import { Store, select } from '@ngrx/store'
import { Observable } from 'rxjs'

import * as fromAuth from '../../../auth/reducers'
import { ListItem } from '../../models'

@Component({
  selector: 'todo-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit {
  userName$: Observable<string> = this.store.pipe(
    select(fromAuth.selectUserName)
  )

  navItems: ListItem[] = [
    {
      label: 'Team To-Do List',
      icon: 'list',
    },
  ]

  constructor(private store: Store<fromAuth.State>) {}

  ngOnInit() {}
}
