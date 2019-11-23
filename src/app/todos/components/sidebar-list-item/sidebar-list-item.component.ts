import { Component, OnInit, Input } from '@angular/core'

import { ListItem } from '../../models'

@Component({
  selector: 'todo-sidebar-list-item',
  templateUrl: './sidebar-list-item.component.html',
  styleUrls: ['./sidebar-list-item.component.scss'],
})
export class SidebarListItemComponent implements OnInit {
  @Input()
  item: ListItem

  constructor() {}

  ngOnInit() {}
}
