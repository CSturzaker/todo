import { Component } from '@angular/core'
import { Store, select } from '@ngrx/store'
import { Observable } from 'rxjs'

import { LoginActions } from '../../actions'

import * as fromAuth from '../../reducers'

import { Credentials } from '../../models'

@Component({
  selector: 'todo-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss'],
})
export class LoginPageComponent {
  error$: Observable<string> = this.store.pipe(
    select(fromAuth.selectLoginPageError)
  )
  pending$: Observable<boolean> = this.store.pipe(
    select(fromAuth.selectLoginPagePending)
  )
  constructor(private store: Store<fromAuth.State>) {}

  onSubmit(credentials: Credentials) {
    this.store.dispatch(LoginActions.login({ credentials }))
  }
}
