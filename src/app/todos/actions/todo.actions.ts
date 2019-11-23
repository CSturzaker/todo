import { v4 as uuid } from 'uuid'
import { createAction, props } from '@ngrx/store'

export const addTodo = createAction(
  '[Todos] Add',
  (name: string, id = uuid()) => ({ name, id })
)

export const toggleTodo = createAction(
  '[Todos] Toggle',
  props<{ id: string }>()
)

export const removeTodo = createAction(
  '[Todos] Remove',
  props<{ id: string }>()
)
