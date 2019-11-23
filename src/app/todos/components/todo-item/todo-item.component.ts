import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core'
import { Todo } from '../../models'

@Component({
  selector: 'todo-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss'],
})
export class TodoItemComponent implements OnInit {
  @Input()
  todo: Todo
  @Output() toggleTodoEvent = new EventEmitter<Todo>()
  @Output() removeTodoEvent = new EventEmitter<Todo>()

  constructor() {}

  ngOnInit() {}

  toggleTodo(todo: Todo) {
    this.toggleTodoEvent.emit(todo)
  }

  removeTodo(todo: Todo) {
    this.removeTodoEvent.emit(todo)
  }
}
