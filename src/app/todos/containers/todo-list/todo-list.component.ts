import { Component, ChangeDetectionStrategy } from '@angular/core'
import { Store, select } from '@ngrx/store'

import { Observable } from 'rxjs'

import * as TodoActions from '../../actions/todo.actions'

import { Todo } from '../../models'

import * as fromTodos from '../../reducers'

@Component({
  selector: 'todo-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TodoListComponent {
  todoItems$: Observable<Todo[]> = this.store.pipe(
    select(fromTodos.selectTodos)
  )
  newTodo = ''

  constructor(private store: Store<fromTodos.State>) {}

  addTodo() {
    this.store.dispatch(TodoActions.addTodo(this.newTodo))
    this.newTodo = ''
  }

  toggleTodo(todo: Todo) {
    const { id } = todo
    this.store.dispatch(TodoActions.toggleTodo({ id }))
  }

  removeTodo(todo: Todo) {
    const { id } = todo
    this.store.dispatch(TodoActions.removeTodo({ id }))
  }
}
