import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpModelComponent } from './emp-model-prasentation';

describe('EmpModelComponent', () => {
  let component: EmpModelComponent;
  let fixture: ComponentFixture<EmpModelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmpModelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmpModelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
