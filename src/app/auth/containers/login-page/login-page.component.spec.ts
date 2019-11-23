import { ComponentFixture, TestBed } from '@angular/core/testing'
import { MatInputModule, MatCardModule } from '@angular/material'
import { ReactiveFormsModule } from '@angular/forms'
import { NoopAnimationsModule } from '@angular/platform-browser/animations'

import { LoginPageComponent } from './login-page.component'
import { LoginFormComponent } from '../../components/login-form/login-form.component'

describe('LoginPageComponent', () => {
  let component: LoginPageComponent
  let fixture: ComponentFixture<LoginPageComponent>

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        NoopAnimationsModule,
        MatInputModule,
        MatCardModule,
        ReactiveFormsModule,
      ],
      declarations: [LoginFormComponent, LoginPageComponent],
    })

    fixture = TestBed.createComponent(LoginPageComponent)
    component = fixture.componentInstance
  })

  it('should create', () => {
    fixture.detectChanges()

    expect(fixture).toMatchSnapshot()
  })
})
