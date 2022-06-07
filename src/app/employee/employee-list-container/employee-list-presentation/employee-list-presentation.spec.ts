import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeListPresentation } from './employee-list-presentation';

describe('EmployeeListPresentation', () => {
  let component: EmployeeListPresentation;
  let fixture: ComponentFixture<EmployeeListPresentation>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeeListPresentation ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeListPresentation);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
