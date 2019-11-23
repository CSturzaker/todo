import {
  createSelector,
  createFeatureSelector,
  Action,
  combineReducers,
} from '@ngrx/store'
import * as fromRoot from '../../state'
import * as fromTodos from '../reducers/todo.reducer'

export const todoFeatureKey = 'todo'

export interface TodoState {
  [fromTodos.todoFeatureKey]: fromTodos.State
}

export interface State extends fromRoot.State {
  [todoFeatureKey]: TodoState
}

export function reducers(state: TodoState | undefined, action: Action) {
  return combineReducers({
    [fromTodos.todoFeatureKey]: fromTodos.reducer,
  })(state, action)
}

export const selectTodoState = createFeatureSelector<State, TodoState>(
  todoFeatureKey
)

export const selectTodoStatusState = createSelector(
  selectTodoState,
  (state: TodoState) => state.todo
)

export const selectTodos = createSelector(
  selectTodoStatusState,
  fromTodos.getTodoItems
)
