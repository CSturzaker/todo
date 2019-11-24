import { ComponentFixture, TestBed } from '@angular/core/testing'

import { SidebarListItemComponent } from './sidebar-list-item.component'
import { MatIconModule } from '@angular/material'

describe('SidebarListItemComponent', () => {
  let component: SidebarListItemComponent
  let fixture: ComponentFixture<SidebarListItemComponent>

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [MatIconModule],
      declarations: [SidebarListItemComponent],
    })
    fixture = TestBed.createComponent(SidebarListItemComponent)
    component = fixture.componentInstance
  })

  it('should create', () => {
    component.item = {
      label: '',
      icon: '',
    }
    fixture.detectChanges()

    expect(component).toBeTruthy()
  })
})
