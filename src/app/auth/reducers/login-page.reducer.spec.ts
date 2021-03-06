import { reducer } from './login-page.reducer'
import * as fromLogin from './login-page.reducer'
import { AuthApiActions, LoginActions } from '../actions'

import { Credentials, User } from '../models'

describe('LoginPageReducer', () => {
  describe('undefined action', () => {
    it('should return the default state', () => {
      const action = {} as any

      const result = reducer(undefined, action)

      expect(result).toMatchSnapshot()
    })
  })

  describe('LOGIN', () => {
    it('should make pending to true', () => {
      const user = { username: 'test' } as Credentials
      const createAction = LoginActions.login({ credentials: user })

      const result = reducer(fromLogin.initialState, createAction)

      expect(result).toMatchSnapshot()
    })
  })

  describe('LOGIN_SUCCESS', () => {
    it('should have no error and no pending state', () => {
      const user = { name: 'test' } as User
      const createAction = AuthApiActions.loginSuccess({ user })

      const result = reducer(fromLogin.initialState, createAction)

      expect(result).toMatchSnapshot()
    })
  })

  describe('LOGIN_FAILURE', () => {
    it('should have an error and no pending state', () => {
      const error = 'login failed'
      const createAction = AuthApiActions.loginFailure({ error })

      const result = reducer(fromLogin.initialState, createAction)

      expect(result).toMatchSnapshot()
    })
  })
})
