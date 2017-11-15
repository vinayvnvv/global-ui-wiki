import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SassStructureComponent } from './sass-structure.component';

describe('SassStructureComponent', () => {
  let component: SassStructureComponent;
  let fixture: ComponentFixture<SassStructureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SassStructureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SassStructureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
