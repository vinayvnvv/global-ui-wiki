import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ColumnsAnimComponent } from './columns-anim.component';

describe('ColumnsAnimComponent', () => {
  let component: ColumnsAnimComponent;
  let fixture: ComponentFixture<ColumnsAnimComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ColumnsAnimComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ColumnsAnimComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
