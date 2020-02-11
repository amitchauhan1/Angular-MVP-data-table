import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpModelContainerComponent } from './employee-form-container';

describe('EmpModelContainerComponent', () => {
  let component: EmpModelContainerComponent;
  let fixture: ComponentFixture<EmpModelContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmpModelContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmpModelContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
