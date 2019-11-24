import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { StoreModule } from '@ngrx/store'

import { MaterialModule } from '../material/material.module'
import { TodosRoutingModule } from './todos-routing.module'

import * as fromTodos from './reducers'

import { TodosPageComponent } from './containers/todos-page/todos-page.component'
import { SidebarComponent } from './containers/sidebar/sidebar.component'
import { SidebarHeaderComponent } from './components/sidebar-header/sidebar-header.component'
import { SidebarListItemComponent } from './components/sidebar-list-item/sidebar-list-item.component'
import { TodoHeaderComponent } from './components/todo-header/todo-header.component'
import { TodoListComponent } from './containers/todo-list/todo-list.component'
import { TodoItemComponent } from './components/todo-item/todo-item.component'
import { TodoDialogComponent } from './containers/todo-list/todo-dialog'
import { FormsModule } from '@angular/forms'

@NgModule({
  declarations: [
    TodosPageComponent,
    SidebarComponent,
    SidebarHeaderComponent,
    SidebarListItemComponent,
    TodoHeaderComponent,
    TodoListComponent,
    TodoItemComponent,
    TodoDialogComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    TodosRoutingModule,
    FormsModule,
    StoreModule.forFeature(fromTodos.todoFeatureKey, fromTodos.reducers),
  ],
  entryComponents: [TodoDialogComponent],
})
export class TodosModule {}
