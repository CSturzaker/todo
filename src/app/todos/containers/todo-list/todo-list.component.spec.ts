import { v4 as uuid } from 'uuid'
import { ComponentFixture, TestBed } from '@angular/core/testing'
import { provideMockStore, MockStore } from '@ngrx/store/testing'
import { Store } from '@ngrx/store'
import {
  MatDialogModule,
  MatCheckboxModule,
  MatIconModule,
} from '@angular/material'
import { MatDialog } from '@angular/material/dialog'

import * as fromTodos from '../../reducers'

import { TodoListComponent } from './todo-list.component'
import { TodoItemComponent } from '../../components/todo-item/todo-item.component'

describe('TodoListComponent', () => {
  let component: TodoListComponent
  let fixture: ComponentFixture<TodoListComponent>
  let store: MockStore<fromTodos.State>

  const todoItems = [
    { id: uuid(), name: 'Shortlist features for MVP', done: false },
    { id: uuid(), name: 'Launch PPC campaign with new creative', done: false },
    {
      id: uuid(),
      name: 'Define audience breakdown with new data',
      done: false,
    },
    { id: uuid(), name: 'Launch demo page for SEO analysis', done: true },
  ]

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [MatDialogModule, MatCheckboxModule, MatIconModule],
      declarations: [TodoListComponent, TodoItemComponent],
      providers: [
        provideMockStore({
          selectors: [{ selector: fromTodos.selectTodos, value: todoItems }],
        }),
        { provide: MatDialog, useValue: {} },
      ],
    })

    fixture = TestBed.createComponent(TodoListComponent)
    component = fixture.componentInstance

    store = TestBed.get(Store)

    spyOn(store, 'dispatch')
  })

  it('should create', () => {
    fixture.detectChanges()

    expect(fixture).toMatchSnapshot()
  })
})
