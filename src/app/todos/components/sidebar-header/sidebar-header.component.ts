import { Component, OnInit, Input } from '@angular/core'

@Component({
  selector: 'todo-sidebar-header',
  templateUrl: './sidebar-header.component.html',
  styleUrls: ['./sidebar-header.component.scss'],
})
export class SidebarHeaderComponent implements OnInit {
  @Input()
  userName: string
  constructor() {}

  ngOnInit() {}
}
