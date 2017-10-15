import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JsToggleInfoComponent } from './js-toggle-info.component';

describe('JsToggleInfoComponent', () => {
  let component: JsToggleInfoComponent;
  let fixture: ComponentFixture<JsToggleInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JsToggleInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JsToggleInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
