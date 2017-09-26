import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WhiteframeComponent } from './whiteframe.component';

describe('WhiteframeComponent', () => {
  let component: WhiteframeComponent;
  let fixture: ComponentFixture<WhiteframeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WhiteframeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WhiteframeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
