import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { TodosRoutingModule } from './todos-routing.module'
import { TodosPageComponent } from './containers/todos-page/todos-page.component'

@NgModule({
  declarations: [TodosPageComponent],
  imports: [CommonModule, TodosRoutingModule],
})
export class TodosModule {}
