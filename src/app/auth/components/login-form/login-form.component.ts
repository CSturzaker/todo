import { Component, Input, Output, EventEmitter } from '@angular/core'
import { FormGroup, FormControl } from '@angular/forms'

// models
import { Credentials } from '../../models'

@Component({
  selector: 'todo-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss'],
})
export class LoginFormComponent {
  @Input()
  set pending(isPending: boolean) {
    if (isPending) {
      this.loginForm.disable()
    } else {
      this.loginForm.enable()
    }
  }

  @Input() errorMessage: string | null

  @Output() submitted = new EventEmitter<Credentials>()

  loginForm: FormGroup = new FormGroup({
    username: new FormControl('Guglielmo Marconi'),
    password: new FormControl(''),
  })

  submit() {
    if (this.loginForm.valid) {
      this.submitted.emit(this.loginForm.value)
    }
  }
}
