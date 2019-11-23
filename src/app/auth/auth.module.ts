import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { ReactiveFormsModule } from '@angular/forms'
import { StoreModule } from '@ngrx/store'
import { EffectsModule } from '@ngrx/effects'

// components
import { LoginFormComponent } from './components/login-form/login-form.component'
import { LoginPageComponent } from './containers/login-page/login-page.component'
// effects
import { AuthEffects } from './effects'

// modules
import { AuthRoutingModule } from './auth-routing.module'
import { MaterialModule } from '../material/material.module'
// reducers
import * as fromAuth from './reducers'

@NgModule({
  declarations: [LoginFormComponent, LoginPageComponent],
  imports: [
    CommonModule,
    AuthRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
    StoreModule.forFeature(fromAuth.authFeatureKey, fromAuth.reducers),
    EffectsModule.forFeature([AuthEffects]),
  ],
})
export class AuthModule {}
