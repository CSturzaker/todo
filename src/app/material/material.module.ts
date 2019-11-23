import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

// material ui modules
import {
  MatInputModule,
  MatCardModule,
  MatCheckboxModule,
  MatButtonModule,
  MatSidenavModule,
  MatListModule,
  MatIconModule,
} from '@angular/material'

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatIconModule,
    MatInputModule,
    MatCheckboxModule,
    MatCardModule,
    MatButtonModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
  ],
  exports: [
    CommonModule,
    MatIconModule,
    MatInputModule,
    MatCheckboxModule,
    MatCardModule,
    MatButtonModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
  ],
})
export class MaterialModule {}
