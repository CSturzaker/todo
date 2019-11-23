import { Component } from '@angular/core'
import { Observable } from 'rxjs'

import { Credentials } from '../../models'

@Component({
  selector: 'todo-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss'],
})
export class LoginPageComponent {
  error$: Observable<any>
  pending$: Observable<boolean>
  constructor() {}

  onSubmit(credentials: Credentials) {}
}
