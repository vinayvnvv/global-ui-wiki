import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResponsivenessComponent } from './responsiveness.component';

describe('ResponsivenessComponent', () => {
  let component: ResponsivenessComponent;
  let fixture: ComponentFixture<ResponsivenessComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResponsivenessComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResponsivenessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
