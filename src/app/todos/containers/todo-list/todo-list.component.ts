import { Component, ChangeDetectionStrategy } from '@angular/core'
import { Store, select } from '@ngrx/store'
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog'

import { Observable } from 'rxjs'

import * as TodoActions from '../../actions/todo.actions'

import { Todo } from '../../models'

import * as fromTodos from '../../reducers'

import { TodoDialogComponent } from './todo-dialog'

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

  constructor(
    private store: Store<fromTodos.State>,
    public dialog: MatDialog
  ) {}

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

  openModal() {
    const dialogRef = this.dialog.open(TodoDialogComponent, {
      width: '300px',
      data: { name: this.newTodo },
    })

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.newTodo = result
        this.addTodo()
      }
    })
  }
}
