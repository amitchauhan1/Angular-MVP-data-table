import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PipePresentation } from './pipe-presentation';

describe('PipePresentation', () => {
  let component: PipePresentation;
  let fixture: ComponentFixture<PipePresentation>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PipePresentation ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PipePresentation);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
