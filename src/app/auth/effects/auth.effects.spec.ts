import { TestBed } from '@angular/core/testing'
import { Router } from '@angular/router'
import { Actions } from '@ngrx/effects'
import { provideMockActions } from '@ngrx/effects/testing'
import { cold, hot } from 'jasmine-marbles'
import { Observable, of } from 'rxjs'

import { LoginActions, AuthApiActions } from '../actions'

import { Credentials, User } from '../models'
import { AuthService } from '../services'
import { AuthEffects } from '../effects'

describe('AuthEffects', () => {
  let effects: AuthEffects
  let authService: any
  let actions$: Observable<any>
  let routerService: any

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        AuthEffects,
        {
          provide: AuthService,
          useValue: { login: jest.fn() },
        },
        provideMockActions(() => actions$),
        {
          provide: Router,
          useValue: { navigate: jest.fn() },
        },
      ],
    })

    effects = TestBed.get(AuthEffects)
    authService = TestBed.get(AuthService)
    actions$ = TestBed.get(Actions)
    routerService = TestBed.get(Router)

    spyOn(routerService, 'navigate').and.callThrough()
  })

  describe('login$', () => {
    it('should return an auth.loginSuccess action, with user information if login succeeds', () => {
      const credentials: Credentials = {
        username: 'Guglielmo Marconi',
        password: 'test',
      }
      const user = { name: 'Guglielmo Marconi' } as User
      const action = LoginActions.login({ credentials })
      const completion = AuthApiActions.loginSuccess({ user })

      actions$ = hot('-a---', { a: action })
      const response = cold('-a|', { a: user })
      const expected = cold('--b', { b: completion })
      authService.login = jest.fn(() => response)

      expect(effects.login$).toBeObservable(expected)
    })

    it('should return a new auth.loginFailure if the login service throws', () => {
      const credentials: Credentials = { username: 'someOne', password: '' }
      const action = LoginActions.login({ credentials })
      const completion = AuthApiActions.loginFailure({
        error: 'Invalid username or password',
      })
      const error = 'Invalid username or password'

      actions$ = hot('-a---', { a: action })
      const response = cold('-#', {}, error)
      const expected = cold('--b', { b: completion })
      authService.login = jest.fn(() => response)

      expect(effects.login$).toBeObservable(expected)
    })
  })

  describe('loginSuccess$', () => {
    it('should dispatch a RouterNavigation action', (done: any) => {
      const user = { name: 'Guglielmo Marconi' } as User
      const action = AuthApiActions.loginSuccess({ user })

      actions$ = of(action)

      effects.loginSuccess$.subscribe(() => {
        expect(routerService.navigate).toHaveBeenCalledWith(['/'])
        done()
      })
    })
  })

  describe('loginRedirect$', () => {
    it('should dispatch a RouterNavigation action when auth.loginRedirect is dispatched', (done: any) => {
      const action = AuthApiActions.loginRedirect()

      actions$ = of(action)

      effects.loginRedirect$.subscribe(() => {
        expect(routerService.navigate).toHaveBeenCalledWith(['/login'])
        done()
      })
    })
  })
})
