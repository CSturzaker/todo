import { ComponentFixture, TestBed } from '@angular/core/testing'
import { provideMockStore, MockStore } from '@ngrx/store/testing'
import { Store } from '@ngrx/store'
import { MatIconModule } from '@angular/material'

import { SidebarComponent } from './sidebar.component'
import { SidebarHeaderComponent } from '../../components/sidebar-header/sidebar-header.component'
import { SidebarListItemComponent } from '../../components/sidebar-list-item/sidebar-list-item.component'

import * as fromAuth from '../../../auth/reducers'

describe('SidebarComponent', () => {
  let component: SidebarComponent
  let fixture: ComponentFixture<SidebarComponent>
  let store: MockStore<fromAuth.State>

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [MatIconModule],
      declarations: [
        SidebarComponent,
        SidebarHeaderComponent,
        SidebarListItemComponent,
      ],
      providers: [
        provideMockStore({
          selectors: [{ selector: fromAuth.selectUserName, value: 'test' }],
        }),
      ],
    })
    fixture = TestBed.createComponent(SidebarComponent)
    component = fixture.componentInstance

    store = TestBed.get(Store)

    spyOn(store, 'dispatch')
  })

  it('should create', () => {
    fixture.detectChanges()
    expect(component).toMatchSnapshot()
  })
})
