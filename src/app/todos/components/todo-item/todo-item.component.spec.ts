import { ComponentFixture, TestBed } from '@angular/core/testing'

import { TodoItemComponent } from './todo-item.component'
import { MatCheckboxModule, MatIconModule } from '@angular/material'

describe('TodoItemComponent', () => {
  let component: TodoItemComponent
  let fixture: ComponentFixture<TodoItemComponent>

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [MatCheckboxModule, MatIconModule],
      declarations: [TodoItemComponent],
    })
    fixture = TestBed.createComponent(TodoItemComponent)
    component = fixture.componentInstance
  })

  it('should create', () => {
    component.todo = {
      id: '',
      name: '',
      done: false,
    }
    fixture.detectChanges()

    expect(component).toBeTruthy()
  })
})
