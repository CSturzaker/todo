import { v4 as uuid } from 'uuid'
import { createReducer, on, Action } from '@ngrx/store'

import { TodoActions } from '../actions'
import { Todo } from '../models'

export const todoFeatureKey = 'todo'

export interface State {
  todoItems: Todo[]
}

export const initialState: State = {
  todoItems: [
    { id: uuid(), name: 'Shortlist features for MVP', done: false },
    { id: uuid(), name: 'Launch PPC campaign with new creative', done: false },
    {
      id: uuid(),
      name: 'Define audience breakdown with new data',
      done: false,
    },
    { id: uuid(), name: 'Launch demo page for SEO analysis', done: true },
  ],
}

export const reducer = createReducer(
  initialState,
  on(TodoActions.addTodo, (state, todo) => ({
    ...state,
    todoItems: [
      {
        id: todo.id,
        name: todo.name,
        done: false,
      },
      ...state.todoItems,
    ],
  })),
  on(TodoActions.toggleTodo, (state, todo) => ({
    ...state,
    todoItems: state.todoItems.map((item: Todo) =>
      item.id === todo.id ? { ...item, done: !item.done } : item
    ),
  })),
  on(TodoActions.removeTodo, (state, todo) => ({
    ...state,
    todoItems: state.todoItems.filter((item: Todo) => item.id !== todo.id),
  }))
)

export const getTodoItems = (state: State) => state.todoItems
