import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarAnimComponent } from './navbar-anim.component';

describe('NavbarAnimComponent', () => {
  let component: NavbarAnimComponent;
  let fixture: ComponentFixture<NavbarAnimComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavbarAnimComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarAnimComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
