import { ComponentFixture, TestBed } from '@angular/core/testing'
import { MatInputModule, MatCardModule } from '@angular/material'
import { ReactiveFormsModule } from '@angular/forms'
import { NoopAnimationsModule } from '@angular/platform-browser/animations'
import { provideMockStore, MockStore } from '@ngrx/store/testing'
import { Store } from '@ngrx/store'

import { LoginActions } from '../../actions'
import * as fromAuth from '../../reducers'

import { LoginPageComponent } from './login-page.component'
import { LoginFormComponent } from '../../components/login-form/login-form.component'

describe('LoginPageComponent', () => {
  let fixture: ComponentFixture<LoginPageComponent>
  let store: MockStore<fromAuth.State>
  let instance: LoginPageComponent

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        NoopAnimationsModule,
        MatInputModule,
        MatCardModule,
        ReactiveFormsModule,
      ],
      declarations: [LoginFormComponent, LoginPageComponent],
      providers: [
        provideMockStore({
          selectors: [
            { selector: fromAuth.selectLoginPagePending, value: false },
          ],
        }),
      ],
    })

    fixture = TestBed.createComponent(LoginPageComponent)
    instance = fixture.componentInstance
    store = TestBed.get(Store)

    spyOn(store, 'dispatch')
  })

  it('should create', () => {
    fixture.detectChanges()

    expect(fixture).toMatchSnapshot()
  })

  it('should dispatch a login event on submit', () => {
    const credentials: any = {}
    const action = LoginActions.login({ credentials })

    instance.onSubmit(credentials)

    expect(store.dispatch).toHaveBeenCalledWith(action)
  })
})
