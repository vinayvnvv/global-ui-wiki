import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DocsTabTemplateComponent } from './docs-tab-template.component';

describe('DocsTabTemplateComponent', () => {
  let component: DocsTabTemplateComponent;
  let fixture: ComponentFixture<DocsTabTemplateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DocsTabTemplateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DocsTabTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
