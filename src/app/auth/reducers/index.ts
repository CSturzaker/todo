import {
  createSelector,
  createFeatureSelector,
  Action,
  combineReducers,
} from '@ngrx/store'
import * as fromRoot from '../../state'
import * as fromAuth from '../reducers/auth.reducer'
import * as fromLoginPage from '../reducers/login-page.reducer'

export const authFeatureKey = 'auth'

export interface AuthState {
  [fromAuth.authFeatureKey]: fromAuth.State
  [fromLoginPage.loginPageFeatureKey]: fromLoginPage.State
}

export interface State extends fromRoot.State {
  [authFeatureKey]: AuthState
}

export function reducers(state: AuthState | undefined, action: Action) {
  return combineReducers({
    [fromAuth.authFeatureKey]: fromAuth.reducer,
    [fromLoginPage.loginPageFeatureKey]: fromLoginPage.reducer,
  })(state, action)
}

export const selectAuthState = createFeatureSelector<State, AuthState>(
  authFeatureKey
)

export const selectAuthStatusState = createSelector(
  selectAuthState,
  (state: AuthState) => state.auth
)
export const selectUser = createSelector(
  selectAuthStatusState,
  fromAuth.getUser
)
export const selectLoggedIn = createSelector(selectUser, user => !!user)

export const selectLoginPageState = createSelector(
  selectAuthState,
  (state: AuthState) => state.loginPage
)
export const selectLoginPageError = createSelector(
  selectLoginPageState,
  fromLoginPage.getError
)
export const selectLoginPagePending = createSelector(
  selectLoginPageState,
  fromLoginPage.getPending
)
export const selectUserName = createSelector(
  selectAuthStatusState,
  fromAuth.getUsername
)
