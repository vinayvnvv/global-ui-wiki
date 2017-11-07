import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarAnimComponent } from './sidebar-anim.component';

describe('SidebarAnimComponent', () => {
  let component: SidebarAnimComponent;
  let fixture: ComponentFixture<SidebarAnimComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SidebarAnimComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SidebarAnimComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
