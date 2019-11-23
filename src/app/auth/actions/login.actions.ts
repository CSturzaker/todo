import { createAction, props } from '@ngrx/store'

// models
import { Credentials } from '../models'

export const login = createAction(
  '[Login Page] Login',
  props<{ credentials: Credentials }>()
)
