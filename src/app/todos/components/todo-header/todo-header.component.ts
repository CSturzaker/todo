import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'todo-todo-header',
  templateUrl: './todo-header.component.html',
  styleUrls: ['./todo-header.component.scss'],
})
export class TodoHeaderComponent implements OnInit {
  today: number = Date.now()

  constructor() {}

  ngOnInit() {}
}
