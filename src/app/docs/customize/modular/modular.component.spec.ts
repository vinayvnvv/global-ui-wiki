import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModularComponent } from './modular.component';

describe('ModularComponent', () => {
  let component: ModularComponent;
  let fixture: ComponentFixture<ModularComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModularComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
