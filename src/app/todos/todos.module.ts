import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { MaterialModule } from '../material/material.module'
import { TodosRoutingModule } from './todos-routing.module'

import { TodosPageComponent } from './containers/todos-page/todos-page.component'
import { SidebarComponent } from './containers/sidebar/sidebar.component'
import { SidebarHeaderComponent } from './components/sidebar-header/sidebar-header.component'
import { SidebarListItemComponent } from './components/sidebar-list-item/sidebar-list-item.component'

@NgModule({
  declarations: [
    TodosPageComponent,
    SidebarComponent,
    SidebarHeaderComponent,
    SidebarListItemComponent,
  ],
  imports: [CommonModule, MaterialModule, TodosRoutingModule],
})
export class TodosModule {}
