import { reducer } from './auth.reducer'
import * as fromAuth from './auth.reducer'
import { AuthApiActions } from '../actions'

import { User } from '../models'

describe('AuthReducer', () => {
  describe('undefined action', () => {
    it('should return the default state', () => {
      const action = {} as any

      const result = reducer(undefined, action)

      expect(result).toMatchSnapshot()
    })
  })

  describe('LOGIN_SUCCESS', () => {
    it('should add a user set loggedIn to true in auth state', () => {
      const user = { name: 'test' } as User
      const createAction = AuthApiActions.loginSuccess({ user })

      const result = reducer(fromAuth.initialState, createAction)

      expect(result).toMatchSnapshot()
    })
  })
})
