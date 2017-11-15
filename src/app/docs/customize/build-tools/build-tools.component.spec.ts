import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuildToolsComponent } from './build-tools.component';

describe('BuildToolsComponent', () => {
  let component: BuildToolsComponent;
  let fixture: ComponentFixture<BuildToolsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuildToolsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuildToolsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
