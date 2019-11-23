import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { MaterialModule } from '../material/material.module'
import { TodosRoutingModule } from './todos-routing.module'

import { TodosPageComponent } from './containers/todos-page/todos-page.component'
import { SidebarComponent } from './containers/sidebar/sidebar.component'
import { SidebarHeaderComponent } from './components/sidebar-header/sidebar-header.component'
import { SidebarListItemComponent } from './components/sidebar-list-item/sidebar-list-item.component'
import { TodoHeaderComponent } from './components/todo-header/todo-header.component'
import { TodoListComponent } from './containers/todo-list/todo-list.component'

@NgModule({
  declarations: [
    TodosPageComponent,
    SidebarComponent,
    SidebarHeaderComponent,
    SidebarListItemComponent,
    TodoHeaderComponent,
    TodoListComponent,
  ],
  imports: [CommonModule, MaterialModule, TodosRoutingModule],
})
export class TodosModule {}
