import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectivePresentation } from './directive-presentation';

describe('DirectivePresentation', () => {
  let component: DirectivePresentation;
  let fixture: ComponentFixture<DirectivePresentation>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DirectivePresentation ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DirectivePresentation);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
