import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ColorsPaletteComponent } from './colors-palette.component';

describe('ColorsPaletteComponent', () => {
  let component: ColorsPaletteComponent;
  let fixture: ComponentFixture<ColorsPaletteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ColorsPaletteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ColorsPaletteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
