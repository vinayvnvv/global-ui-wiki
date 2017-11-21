import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonsAnimComponent } from './buttons-anim.component';

describe('ButtonsAnimComponent', () => {
  let component: ButtonsAnimComponent;
  let fixture: ComponentFixture<ButtonsAnimComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ButtonsAnimComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonsAnimComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
