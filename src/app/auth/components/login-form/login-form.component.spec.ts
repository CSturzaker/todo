import { ComponentFixture, TestBed } from '@angular/core/testing'
import { ReactiveFormsModule } from '@angular/forms'
import { NO_ERRORS_SCHEMA } from '@angular/core'

import { LoginFormComponent } from './login-form.component'

describe('LoginFormComponent', () => {
  let component: LoginFormComponent
  let fixture: ComponentFixture<LoginFormComponent>

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ReactiveFormsModule],
      declarations: [LoginFormComponent],
      schemas: [NO_ERRORS_SCHEMA],
    })

    fixture = TestBed.createComponent(LoginFormComponent)
    component = fixture.componentInstance
  })

  it('should create', () => {
    fixture.detectChanges()
    expect(fixture).toMatchSnapshot()
  })

  it('should disable the form if pending', () => {
    component.pending = true

    fixture.detectChanges()

    expect(fixture).toMatchSnapshot()
  })

  it('should display an error message if provided', () => {
    component.errorMessage = 'Invalid credentials'

    fixture.detectChanges()

    expect(fixture).toMatchSnapshot()
  })

  it('should emit an event if the form is valid when submitted', () => {
    const credentials = {
      username: 'user',
      password: 'pass',
    }

    component.loginForm.setValue(credentials)

    spyOn(component.submitted, 'emit')
    component.submit()

    expect(component.submitted.emit).toHaveBeenCalledWith(credentials)
  })
})
